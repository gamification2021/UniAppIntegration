package com.example.nativescreenplugin;

import android.app.Activity;
import android.content.Intent;

import com.app.spin_and_win.SpinAndWinActivity;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import io.dcloud.feature.uniapp.common.UniModule;

public class NativeScreenModule extends UniModule {

    /**
     * Opens the SpinAndWin screen.
     * Called from JavaScript via: nativePlugin.openGameScreen(callback)
     *
     * @param callback JS callback — receives "success" or an error message string
     */
    @UniJSMethod(uiThread = true)
    public void openGameScreen(UniJSCallback callback) {
        if (mUniSDKInstance == null || mUniSDKInstance.getContext() == null) {
            invokeCallback(callback, "error: UniSDKInstance context is null");
            return;
        }

        try {
            Activity activity = (Activity) mUniSDKInstance.getContext();
            Intent intent = new Intent(activity, SpinAndWinActivity.class);
            activity.startActivity(intent);
            invokeCallback(callback, "success");
        } catch (Exception e) {
            invokeCallback(callback, "error: " + e.getMessage());
        }
    }

    private void invokeCallback(UniJSCallback callback, String result) {
        if (callback != null) {
            callback.invoke(result);
        }
    }
}
