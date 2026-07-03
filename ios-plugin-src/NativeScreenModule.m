#import "NativeScreenModule.h"

// -------------------------------------------------------------------------
// TODO: Replace with the actual header from your XCFramework
// Example: #import <MySDK/MySDKViewController.h>
//          #import <ThirdParty/ThirdPartyViewController.h>
// -------------------------------------------------------------------------
// #import <ThirdParty/YourNativeViewController.h>

// -------------------------------------------------------------------------
// TODO: Replace "YourNativeViewController" with the actual class name
// from your XCFramework (can also be resolved at runtime via NSClassFromString)
// -------------------------------------------------------------------------
static NSString *const kTargetViewControllerClass = @"YourNativeViewController";

@implementation NativeScreenModule

// Register the method so it can be called from JavaScript
// Usage in JS: nativePlugin.openNativeScreen(callback)
UNI_EXPORT_METHOD(@selector(openNativeScreen:))

/**
 * Opens the native ViewController from the third-party XCFramework.
 *
 * @param callback JS callback block — called with "success" or an error string.
 *                 Pass NO as the second param (keepAlive = NO) since this is a one-time call.
 */
- (void)openNativeScreen:(UniModuleKeepAliveCallback)callback {
    dispatch_async(dispatch_get_main_queue(), ^{
        @try {
            // Resolve the ViewController class at runtime using the class name string.
            // This approach works even if the header import is not available at compile time.
            Class vcClass = NSClassFromString(kTargetViewControllerClass);

            if (!vcClass) {
                NSString *errorMsg = [NSString stringWithFormat:
                    @"error: ViewController class '%@' not found. "
                    @"Ensure your XCFramework is embedded and the class name is correct.",
                    kTargetViewControllerClass];
                if (callback) callback(errorMsg, NO);
                return;
            }

            // Instantiate the ViewController from the XCFramework
            UIViewController *nativeVC = [[vcClass alloc] init];

            // Find the topmost presented ViewController to present on top of
            UIViewController *rootVC = [UIApplication sharedApplication].keyWindow.rootViewController;
            while (rootVC.presentedViewController) {
                rootVC = rootVC.presentedViewController;
            }

            // Present the native screen modally
            [rootVC presentViewController:nativeVC animated:YES completion:^{
                if (callback) callback(@"success", NO);
            }];
        } @catch (NSException *exception) {
            NSString *errorMsg = [NSString stringWithFormat:@"error: %@", exception.reason];
            if (callback) callback(errorMsg, NO);
        }
    });
}

@end
