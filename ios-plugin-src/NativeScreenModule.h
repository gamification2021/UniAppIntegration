#import <Foundation/Foundation.h>
#import <DCUniPlugin/DCUniPlugin.h>

NS_ASSUME_NONNULL_BEGIN

/**
 * NativeScreenModule
 *
 * UniApp native module (iOS) that bridges JavaScript to a UIViewController
 * provided by a third-party XCFramework.
 *
 * SETUP:
 * 1. Replace "YourNativeViewController" in NativeScreenModule.m with the
 *    actual class name from your XCFramework.
 * 2. Uncomment the import for your XCFramework header.
 * 3. Build this file as a Framework in Xcode and place it in
 *    nativeplugins/NativeScreenPlugin/ios/NativeScreenPlugin.framework
 * 4. Place your XCFramework in
 *    nativeplugins/NativeScreenPlugin/ios/ThirdParty.xcframework
 */
@interface NativeScreenModule : DCUniModule

@end

NS_ASSUME_NONNULL_END
