# Android Native Plugin Files

Place the following files in this directory:

## Required Files

1. **`NativeScreenPlugin.aar`** — Compiled Android plugin AAR
   - Build from `android-plugin-src/` using Android Studio
   - This file contains `NativeScreenModule.java` (the bridge code)

2. **`ThirdParty.aar`** — Your third-party AAR library
   - Rename your AAR to match the name in `config.json`
   - OR update `config.json` with your actual AAR filename

## Directory structure after placing files:
```
android/
├── config.json
├── NativeScreenPlugin.aar     ← plugin bridge (build from android-plugin-src/)
└── ThirdParty.aar             ← your third-party AAR
```

## Build NativeScreenPlugin.aar

1. Open `android-plugin-src/` folder as a project in Android Studio
2. Place your `ThirdParty.aar` inside `android-plugin-src/NativeScreenPlugin/third-party-aar/`
3. Update `NativeScreenModule.java` with the correct Activity class name from your AAR
4. Run `./gradlew :NativeScreenPlugin:assembleRelease`
5. Copy `android-plugin-src/NativeScreenPlugin/build/outputs/aar/NativeScreenPlugin-release.aar`
   → rename to `NativeScreenPlugin.aar` and place here
