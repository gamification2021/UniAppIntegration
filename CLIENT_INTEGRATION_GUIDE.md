# Gamification SDK — UniApp Integration Guide

This guide covers adding the Gamification native screen (Android AAR + iOS Swift SDK) into an **existing UniApp project**. No native IDE (Xcode/Android Studio) work is required on your side for either platform.

---

## 1. What you're receiving

Two folders, delivered as-is:

```
nativeplugins/NativeScreenPlugin/     ← Android
uni_modules/native-screen-plugin/     ← iOS
```

| | Android | iOS |
|---|---|---|
| Contains | Precompiled `.aar` (bridge + SDK) | Swift-like source (`.uts`) + raw `GamificationFramework.xcframework` |
| Needs compiling by you? | No — already compiled | No — HBuilderX compiles it automatically when you build the app |
| Needs an entry in `manifest.json`? | **Yes** | **No** — auto-detected |

---

## 2. Where to put the folders

Copy both folders into your project's **root directory** — the same level as `pages/`, `App.vue`, and `manifest.json`:

```
YourExistingUniAppProject/
├── App.vue
├── main.js
├── manifest.json
├── pages.json
├── pages/
│   └── ...your existing pages...
├── nativeplugins/
│   └── NativeScreenPlugin/         ← paste this folder here
└── uni_modules/
    └── native-screen-plugin/       ← paste this folder here
```

If you already have other plugins in `nativeplugins/` or `uni_modules/`, just add these alongside them — don't merge/replace anything else in those folders.

---

## 3. manifest.json — Android only

Open `manifest.json` (use HBuilderX's raw JSON view: right-click the file → "使用编辑器打开" / or the "源码视图" toggle in the visual editor).

Inside `"app-plus"`, add (or merge into) a `"nativePlugins"` block:

```json
"nativePlugins": {
    "NativeScreenPlugin": {
        "__plugin_info__": {
            "name": "NativeScreenPlugin",
            "description": "",
            "platforms": "android",
            "parameters": {}
        }
    }
}
```

No manifest.json change is needed for iOS — `uni_modules` plugins are auto-detected by HBuilderX.

---

## 4. Code you need to add

In whichever `.vue` page has your existing button, add this:

```js
<script>
// iOS — compiled automatically by HBuilderX from uni_modules/native-screen-plugin
import { openGameScreen as iosOpenGameScreen } from "@/uni_modules/native-screen-plugin";

const sysInfo = uni.getSystemInfoSync();
const isApp = sysInfo.uniPlatform === "app";
const isAndroidPlatform = sysInfo.platform === "android";

// Android — precompiled AAR plugin
let nativePlugin = null;
if (isApp && isAndroidPlatform) {
  try {
    nativePlugin = uni.requireNativePlugin("NativeScreenPlugin");
  } catch (e) {
    console.warn("NativeScreenPlugin not loaded:", e);
  }
}

export default {
  methods: {
    // Call this from your existing button's @click
    openGameScreen() {
      if (!isApp) {
        uni.showModal({
          title: "Not Available",
          content: "Native plugins only work on a real device/emulator via HBuilderX custom base.",
          showCancel: false,
        });
        return;
      }

      const handleResult = (result) => {
        if (result === "success" || (result && result.action)) {
          console.log("Game screen opened successfully");
        } else {
          console.log("Error:", (result && result.errMsg) || result);
        }
      };

      if (isAndroidPlatform) {
        if (!nativePlugin) return;
        nativePlugin.openGameScreen(handleResult);
      } else {
        iosOpenGameScreen({
          success: (res) => handleResult(res),
          fail: (err) => handleResult(err),
        });
      }
    },
  },
};
</script>
```

Wire `openGameScreen` to your existing button's `@click` — that's the only integration point. Everything else (native bridging, SDK calls) is already handled inside the two delivered folders.

---

## 5. Testing — required for both platforms

Native plugins **cannot** run on HBuilderX's standard preview/simulator — you must build a **custom debug base**:

1. Connect a real device (Android or iOS) via USB.
2. Menu: **运行 (Run) → 运行到手机或模拟器 (Run to Phone or Emulator) → 制作自定义调试基座 (Make Custom Debug Base)** → select platform.
3. For iOS: provide your Apple provisioning profile + certificate when prompted.
4. Wait for the build — on success it produces an installable debug app (for iOS, an ad-hoc `.ipa`; for Android, an `.apk` install prompt).
5. Install it on the device.
6. Subsequent runs: **Run → Run to Phone or Emulator → select the platform → "Use Custom Base" / "Local playground"** — this pushes JS changes to the already-installed base without rebuilding native code, unless native plugin files themselves changed (then rebuild the custom base again).

---

## 6. Troubleshooting

| Symptom | Cause |
|---|---|
| "Plugin not available" / "Native plugin not found" | Running on standard playground/simulator instead of a custom debug base |
| iOS: "ios目录不存在" or similar plugin errors | Folder structure under `uni_modules/native-screen-plugin/utssdk/app-ios/` was altered — keep it as delivered |
| Android: plugin not found | `manifest.json`'s `nativePlugins` block missing/misconfigured |
| iOS build error referencing `GamificationFramework` | The xcframework wasn't copied into `uni_modules/native-screen-plugin/utssdk/app-ios/Frameworks/` |
