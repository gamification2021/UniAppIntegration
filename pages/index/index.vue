<template>
  <view class="container">
    <!-- Header -->
    <view class="header">
      <text class="title">Native Screen Demo</text>
      <text class="subtitle">UniApp · AAR · XCFramework</text>
    </view>

    <!-- Platform Card -->
    <view class="card">
      <view
        class="platform-badge"
        :class="isAndroid ? 'android-badge' : 'ios-badge'"
      >
        <text class="platform-text">{{ platformLabel }}</text>
      </view>
      <text class="card-title">Native Library Integration</text>
      <text class="card-description">
        Tap the button below to open the native screen provided by the
        {{ isAndroid ? "AAR library (Android)" : "XCFramework (iOS)" }}.
      </text>
    </view>

    <!-- TEST ONLY: new UTS-based Android path, not wired into the main
         button above. Remove this block once the UTS Android path is
         verified (or confirmed unnecessary) by the Android dev. -->
    <view v-if="isAndroid" class="button-wrapper">
      <button
        class="native-btn"
        @click="testUtsAndroid"
        :disabled="utsLoading"
        hover-class="native-btn-hover"
      >
        <text class="btn-text">
          {{ utsLoading ? "Testing..." : "TEST: UTS Android (experimental)" }}
        </text>
      </button>
    </view>
    <view v-if="utsResultMessage" class="result-box" :class="utsResultStatus">
      <text class="result-icon">{{
        utsResultStatus === "success" ? "✓" : "✗"
      }}</text>
      <text class="result-text">{{ utsResultMessage }}</text>
    </view>

    <!-- Info Box -->
    <view class="info-box">
      <text class="info-title">How it works</text>
      <text class="info-item"
        >• Android: Plugin calls InitiateGame().openGameScreen() from
        gamification_library.aar</text
      >
      <text class="info-item"
        >• iOS: Plugin Framework presents ViewController from the
        XCFramework</text
      >
      <text class="info-item"
        >• Pass apiKey, msisdn, language, gameType, campaignId, token</text
      >
    </view>
  </view>
</template>

<script>
// UTS plugin (uni_modules/native-screen-plugin) — HBuilderX compiles this
// automatically per-platform: on iOS this resolves to utssdk/app-ios/index.uts,
// on Android to utssdk/app-android/index.uts. Same import, different native
// code underneath depending on build target.
import { openGameScreen as utsOpenGameScreen } from "@/uni_modules/native-screen-plugin";

// Android: existing AAR-based native plugin — unchanged.
// Not available on H5 or WeChat Mini Program.
const sysInfo = uni.getSystemInfoSync();
const isApp = sysInfo.uniPlatform === "app";
const isAndroidPlatform = sysInfo.platform === "android";

let nativePlugin = null;
if (isApp && isAndroidPlatform) {
  try {
    nativePlugin = uni.requireNativePlugin("NativeScreenPlugin");
  } catch (e) {
    console.warn("NativeScreenPlugin not loaded:", e);
  }
}

export default {
  data() {
    return {
      loading: false,
      resultMessage: "",
      resultStatus: "",
      isAndroid: false,
      platformLabel: "App",
      utsLoading: false,
      utsResultMessage: "",
      utsResultStatus: "",
    };
  },
  onLoad() {
    this.isAndroid = isAndroidPlatform;
    this.platformLabel = this.isAndroid ? "🤖 Android" : " iOS";
  },
  methods: {
    openGameScreen() {
      if (!isApp) {
        uni.showModal({
          title: "Not Available",
          content:
            "Native plugins only work when running on a real device or emulator via HBuilderX custom base.",
          showCancel: false,
        });
        return;
      }

      this.loading = true;
      this.resultMessage = "";

      const handleResult = (result) => {
        this.loading = false;

        if (result === "success" || (result && result.action)) {
          this.resultStatus = "success";
          this.resultMessage = "Game screen opened successfully";
        } else {
          this.resultStatus = "error";
          this.resultMessage =
            (result && result.errMsg) || result || "Unknown error occurred";
        }
      };

      if (isAndroidPlatform) {
        if (!nativePlugin) {
          this.loading = false;
          this.resultStatus = "error";
          this.resultMessage = "NativeScreenPlugin not loaded.";
          return;
        }
        nativePlugin.openGameScreen(handleResult);
      } else {
        utsOpenGameScreen({
          success: (res) => handleResult(res),
          fail: (err) => handleResult(err),
        });
      }
    },

    // TEST ONLY — calls the new UTS Android implementation
    // (uni_modules/native-screen-plugin/utssdk/app-android/index.uts)
    // directly, bypassing the proven nativeplugins/NativeScreenPlugin path
    // above. Use this to verify the UTS path works before considering a
    // switch. Safe to remove once done testing.
    testUtsAndroid() {
      this.utsLoading = true;
      this.utsResultMessage = "";

      utsOpenGameScreen({
        success: (res) => {
          this.utsLoading = false;
          this.utsResultStatus = "success";
          this.utsResultMessage = "UTS Android: game screen opened successfully";
        },
        fail: (err) => {
          this.utsLoading = false;
          this.utsResultStatus = "error";
          this.utsResultMessage =
            "UTS Android error: " + ((err && err.errMsg) || err || "unknown");
        },
      });
    },
  },
};
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  background: linear-gradient(160deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80rpx 40rpx 60rpx;
}

.header {
  text-align: center;
  margin-bottom: 60rpx;

  .title {
    display: block;
    font-size: 52rpx;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 16rpx;
    letter-spacing: 1rpx;
  }

  .subtitle {
    display: block;
    font-size: 26rpx;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 4rpx;
  }
}

.card {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 28rpx;
  padding: 48rpx 40rpx;
  width: 100%;
  margin-bottom: 48rpx;
  border: 1rpx solid rgba(255, 255, 255, 0.25);

  .platform-badge {
    display: inline-flex;
    padding: 10rpx 30rpx;
    border-radius: 50rpx;
    margin-bottom: 28rpx;

    &.android-badge {
      background: rgba(164, 198, 57, 0.85);
    }

    &.ios-badge {
      background: rgba(90, 90, 95, 0.85);
    }
  }

  .platform-text {
    font-size: 26rpx;
    font-weight: 600;
    color: #ffffff;
  }

  .card-title {
    display: block;
    font-size: 34rpx;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 20rpx;
  }

  .card-description {
    display: block;
    font-size: 28rpx;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.7;
  }
}

.button-wrapper {
  width: 100%;
  margin-bottom: 40rpx;
}

.native-btn {
  background: #ffffff !important;
  border-radius: 20rpx !important;
  height: 104rpx !important;
  width: 100% !important;
  border: none !important;
  box-shadow: 0 12rpx 40rpx rgba(0, 0, 0, 0.25) !important;

  .btn-text {
    color: #764ba2;
    font-size: 36rpx;
    font-weight: 700;
  }

  &[disabled] {
    opacity: 0.55 !important;
  }
}

.native-btn-hover {
  transform: scale(0.97);
  opacity: 0.9 !important;
}

.result-box {
  width: 100%;
  padding: 28rpx 36rpx;
  border-radius: 16rpx;
  margin-bottom: 40rpx;
  display: flex;
  flex-direction: row;
  align-items: center;

  &.success {
    background: rgba(76, 217, 100, 0.18);
    border: 2rpx solid rgba(76, 217, 100, 0.55);
  }

  &.error {
    background: rgba(255, 59, 48, 0.18);
    border: 2rpx solid rgba(255, 59, 48, 0.55);
  }

  .result-icon {
    font-size: 36rpx;
    margin-right: 20rpx;
    color: #ffffff;
  }

  .result-text {
    font-size: 28rpx;
    color: #ffffff;
    flex: 1;
    line-height: 1.5;
  }
}

.info-box {
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20rpx;
  padding: 36rpx 40rpx;
  margin-top: 12rpx;

  .info-title {
    display: block;
    font-size: 28rpx;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 24rpx;
  }

  .info-item {
    display: block;
    font-size: 24rpx;
    color: rgba(255, 255, 255, 0.65);
    line-height: 1.8;
    margin-bottom: 8rpx;
  }
}
</style>
