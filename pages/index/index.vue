<template>
  <view class="container">
    <!-- Header -->
    <view class="header">
      <text class="title">Native Screen Demo</text>
      <text class="subtitle">UniApp · AAR · XCFramework</text>
    </view>

    <!-- Card -->
    <view class="card">
      <text class="card-title">Native Library Integration</text>
      <text class="card-description">
        Tap the button below to open the native Gamification screen.
      </text>
    </view>

    <!-- Open Game Screen Button — same for both platforms, no platform check -->
    <view class="button-wrapper">
      <button
        class="native-btn"
        @click="openGameScreen"
        :disabled="loading"
        hover-class="native-btn-hover"
      >
        <text class="btn-text">
          {{ loading ? "Opening..." : "Open Game Screen" }}
        </text>
      </button>
    </view>

    <!-- Result Message -->
    <view v-if="resultMessage" class="result-box" :class="resultStatus">
      <text class="result-icon">{{
        resultStatus === "success" ? "✓" : "✗"
      }}</text>
      <text class="result-text">{{ resultMessage }}</text>
    </view>

    <!-- Info Box -->
    <view class="info-box">
      <text class="info-title">How it works</text>
      <text class="info-item"
        >• Same JS call on both platforms: uni_modules/native-screen-plugin</text
      >
      <text class="info-item"
        >• Android: UTS calls SpinAndWinActivity from spin_and_win-debug.aar</text
      >
      <text class="info-item"
        >• iOS: UTS calls Game.openGame() from GamificationFramework.xcframework</text
      >
    </view>
  </view>
</template>

<script>
// UTS plugin (uni_modules/native-screen-plugin) — HBuilderX compiles this
// automatically per-platform: on iOS this resolves to utssdk/app-ios/index.uts,
// on Android to utssdk/app-android/index.uts. Same import and same call for
// both platforms — no platform branching needed here.
import { openGameScreen } from "@/uni_modules/native-screen-plugin";

export default {
  data() {
    return {
      loading: false,
      resultMessage: "",
      resultStatus: "",
    };
  },
  methods: {
    isNativeApp() {
      // Not available on H5 or WeChat Mini Program — only the compiled app.
      return uni.getSystemInfoSync().uniPlatform === "app";
    },

    openGameScreen() {
      if (!this.isNativeApp()) {
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

      openGameScreen({
        success: (res) => this.handleResult(res),
        fail: (err) => this.handleResult(err),
      });
    },

    handleResult(result) {
      this.loading = false;

      if (result === "success" || (result && result.action)) {
        this.resultStatus = "success";

        const action = result && result.action;
        if (action === "back") {
          this.resultMessage = "User tapped back inside the SDK screen";
          // TODO: your app-specific handling when the user taps back
        } else if (action) {
          this.resultMessage = "SDK action: " + action;
          // TODO: your app-specific handling for any other action
        } else {
          this.resultMessage = "Game screen opened successfully";
        }
      } else {
        this.resultStatus = "error";
        this.resultMessage =
          (result && result.errMsg) || result || "Unknown error occurred";
      }
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
