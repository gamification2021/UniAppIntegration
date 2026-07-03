# iOS Native Plugin Files

Place the following files in this directory:

## Required Files

1. **`NativeScreenPlugin.framework`** — Compiled iOS plugin framework
   - Build from `ios-plugin-src/` using Xcode (create a Framework target)
   - This file contains `NativeScreenModule` (the bridge code)

2. **`ThirdParty.xcframework`** — Your third-party XCFramework
   - Place your actual `.xcframework` bundle here
   - Update `config.json` `embedFrameworks` array with the correct name if different

## Directory structure after placing files:
```
ios/
├── config.json
├── NativeScreenPlugin.framework/   ← plugin bridge (build from ios-plugin-src/)
└── ThirdParty.xcframework/         ← your third-party XCFramework
```

## Build NativeScreenPlugin.framework

1. Open Xcode → New Project → Framework → Name it `NativeScreenPlugin`
2. Add `DCUniPlugin.framework` from the HBuilderX SDK to the project (compile only)
3. Copy `NativeScreenModule.h` and `NativeScreenModule.m` from `ios-plugin-src/` into the project
4. Update the import and class name in `NativeScreenModule.m` to match your XCFramework
5. Add your `ThirdParty.xcframework` to the project
6. Build for `Generic iOS Device` → collect the `.framework` from the build output
7. Place it here as `NativeScreenPlugin.framework`

## HBuilderX SDK Location
Download the iOS UniApp SDK from:
https://nativesupport.dcloud.net.cn/AppDocs/download/ios
