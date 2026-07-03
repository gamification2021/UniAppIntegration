# NativeScreenApp — UniApp + AAR + XCFramework

A UniApp project that launches a native screen from a third-party **AAR** (Android) or **XCFramework** (iOS) on a button tap.

---

## Project Structure

```
Uniapp/
├── pages/index/index.vue          ← Main UI (button to open native screen)
├── App.vue / main.js              ← UniApp entry
├── manifest.json                  ← App config, references NativeScreenPlugin
├── pages.json                     ← Page routing
│
├── nativeplugins/
│   └── NativeScreenPlugin/
│       ├── package.json           ← Plugin metadata for HBuilderX
│       ├── android/
│       │   ├── config.json
│       │   ├── NativeScreenPlugin.aar     ← BUILD & PLACE HERE (step 3)
│       │   └── ThirdParty.aar             ← YOUR AAR (step 1)
│       └── ios/
│           ├── config.json
│           ├── NativeScreenPlugin.framework   ← BUILD & PLACE HERE (step 5)
│           └── ThirdParty.xcframework         ← YOUR XCFramework (step 4)
│
├── android-plugin-src/            ← Android Studio library project
│   └── NativeScreenPlugin/
│       └── src/main/java/.../NativeScreenModule.java
│
└── ios-plugin-src/                ← Xcode framework source
    ├── NativeScreenModule.h
    └── NativeScreenModule.m
```

---

## Setup Steps

### Step 1 — Add Your Android AAR

1. Copy your third-party AAR into:
   ```
   nativeplugins/NativeScreenPlugin/android/ThirdParty.aar
   ```
   (Rename it to `ThirdParty.aar` or update `config.json` with your actual filename.)

2. Find the **Activity class name** you want to launch (e.g., `com.mycompany.sdk.SdkActivity`).

---

### Step 2 — Update Android Plugin Source

Open `android-plugin-src/NativeScreenPlugin/src/main/java/.../NativeScreenModule.java`:

```java
// Change this line:
private static final String TARGET_ACTIVITY_CLASS = "com.yourcompany.aar.YourNativeActivity";

// To your actual Activity class, e.g.:
private static final String TARGET_ACTIVITY_CLASS = "com.mycompany.sdk.SdkActivity";
```

---

### Step 3 — Build the Android Plugin AAR

1. Download the **UniApp Android SDK** from:
   https://nativesupport.dcloud.net.cn/AppDocs/download/android

2. Place the SDK `.aar` / `.jar` files inside:
   ```
   android-plugin-src/NativeScreenPlugin/uniapp-libs/
   ```

3. Place your third-party AAR inside:
   ```
   android-plugin-src/NativeScreenPlugin/third-party-aar/ThirdParty.aar
   ```

4. Open `android-plugin-src/` in **Android Studio** and build:
   ```
   ./gradlew :NativeScreenPlugin:assembleRelease
   ```

5. Copy the output:
   ```
   android-plugin-src/NativeScreenPlugin/build/outputs/aar/NativeScreenPlugin-release.aar
   ```
   → Rename to `NativeScreenPlugin.aar` and place in:
   ```
   nativeplugins/NativeScreenPlugin/android/
   ```

---

### Step 4 — Add Your iOS XCFramework

Copy your XCFramework into:
```
nativeplugins/NativeScreenPlugin/ios/ThirdParty.xcframework
```
(Rename or update `config.json` → `embedFrameworks` if your name differs.)

Find the **ViewController class name** to present (e.g., `MySDKViewController`).

---

### Step 5 — Build the iOS Plugin Framework

1. Download the **UniApp iOS SDK** from:
   https://nativesupport.dcloud.net.cn/AppDocs/download/ios

2. Open **Xcode** → New Project → **Framework** → Name: `NativeScreenPlugin`

3. Add `DCUniPlugin.framework` (from SDK) to the project as **compileOnly**.

4. Drag `ios-plugin-src/NativeScreenModule.h` and `NativeScreenModule.m` into the project.

5. Update the class name in `NativeScreenModule.m`:
   ```objc
   static NSString *const kTargetViewControllerClass = @"MySDKViewController"; // your class
   ```
   Also uncomment and update the import:
   ```objc
   #import <ThirdParty/MySDKViewController.h>
   ```

6. Add your `ThirdParty.xcframework` to the project (embed & sign).

7. Build for **Generic iOS Device** → collect the `.framework` from DerivedData.

8. Place it in:
   ```
   nativeplugins/NativeScreenPlugin/ios/NativeScreenPlugin.framework
   ```

---

### Step 6 — Run in HBuilderX

> ⚠️ Native plugins **cannot** run in the standard simulator build.
> You must use **HBuilderX Custom Base** to test native plugins on a device.

1. Open this project folder in **HBuilderX**.
2. Go to **Run → Run to Phone or Emulator → Make Custom Debugging Base**.
3. Select the custom base and run on a real device.
4. Tap **"Open Native Screen"** — the native Activity/ViewController will appear.

---

## How It Works

```
[JS Button Click]
      ↓
uni.requireNativePlugin('NativeScreenPlugin').openNativeScreen(callback)
      ↓
  [Android]                          [iOS]
NativeScreenModule.java         NativeScreenModule.m
  startActivity(YourActivity)     presentViewController(YourVC)
      ↓                                  ↓
 AAR's Activity opens            XCFramework's VC presents
      ↓                                  ↓
  callback("success")            callback("success", NO)
      ↓
[JS result shown in UI]
```

---

## Troubleshooting

| Problem | Solution |
|---|---|
| `Plugin not available` toast | Run via HBuilderX Custom Base, not standard run |
| `Activity class not found` | Check the class name in `NativeScreenModule.java` |
| `ViewController class not found` | Check the class name in `NativeScreenModule.m` |
| Build error: missing UniApp SDK | Download SDK and place in `uniapp-libs/` / add to Xcode |
| iOS: blank screen on present | Ensure XCFramework is embedded (not just linked) |

---

## Requirements

- **HBuilderX** 3.x or later (for custom base build)
- **Android Studio** (to build Android plugin AAR)
- **Xcode 14+** (to build iOS plugin Framework, macOS required)
- **UniApp Android SDK** & **UniApp iOS SDK** (download links above)
