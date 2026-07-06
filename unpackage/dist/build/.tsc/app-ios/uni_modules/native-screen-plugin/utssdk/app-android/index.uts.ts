import { OpenGameScreen, OpenGameScreenOptions } from "../interface.uts"

// Android continues to use the existing AAR-based plugin
// (nativeplugins/NativeScreenPlugin) via uni.requireNativePlugin — this stub
// only exists so the shared interface.uts type has an Android implementation
// and cross-platform compilation doesn't fail.
export const openGameScreen : OpenGameScreen = function (options : OpenGameScreenOptions) {
	options.fail?.("Use uni.requireNativePlugin('NativeScreenPlugin') on Android instead of this UTS plugin.")
	options.complete?.("not_implemented")
}
