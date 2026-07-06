import DCloudUTSFoundation
import GamificationFramework
@objc(UTSSDKModulesNativeScreenPluginGameActionResult)
@objcMembers
public class GameActionResult : NSObject, UTSObject {
    public var action: String!
    public subscript(_ key: String) -> Any? {
        get {
            return utsSubscriptGetValue(key)
        }
        set {
            switch(key){
                case "action":
                    self.action = try! utsSubscriptCheckValue(newValue)
                default:
                    break
            }
        }
    }
    public override init() {
        super.init()
    }
    public init(_ obj: UTSJSONObject) {
        self.action = obj["action"] as! String
    }
}
@objc(UTSSDKModulesNativeScreenPluginOpenGameScreenOptions)
@objcMembers
public class OpenGameScreenOptions : NSObject, UTSObject {
    public var success: ((_ res: GameActionResult) -> Void)?
    public var fail: ((_ res: Any) -> Void)?
    public var complete: ((_ res: Any) -> Void)?
    public subscript(_ key: String) -> Any? {
        get {
            return utsSubscriptGetValue(key)
        }
        set {
            switch(key){
                case "success":
                    self.success = try! utsSubscriptCheckValueIfPresent(newValue)
                case "fail":
                    self.fail = try! utsSubscriptCheckValueIfPresent(newValue)
                case "complete":
                    self.complete = try! utsSubscriptCheckValueIfPresent(newValue)
                default:
                    break
            }
        }
    }
    public override init() {
        super.init()
    }
    public init(_ obj: UTSJSONObject) {
        self.success = obj["success"] as! ((_ res: GameActionResult) -> Void)?
        self.fail = obj["fail"] as! ((_ res: Any) -> Void)?
        self.complete = obj["complete"] as! ((_ res: Any) -> Void)?
    }
}
public typealias OpenGameScreen = (_ options: OpenGameScreenOptions) -> Void
public var openGameScreen: OpenGameScreen = {
(_ options: OpenGameScreenOptions) -> Void in
DispatchQueue.main.async(execute: {
() -> Void in
var controller = UTSiOS.getCurrentViewController()
Game.openGame(controller: controller, complition: {
(_ action: GameAction) -> Void in
var actionName: String = "default"
switch(action){
    case GameAction.back:
        actionName = "back"
    default:
        actionName = "default"
        break
}
var res = GameActionResult(UTSJSONObject([
    "action": actionName
]))
options.success?(res)
options.complete?(res)
})
})
}
@objc(UTSSDKModulesNativeScreenPluginOpenGameScreenOptionsJSONObject)
@objcMembers
public class OpenGameScreenOptionsJSONObject : NSObject {
    public var success: UTSCallback?
    public var fail: UTSCallback?
    public var complete: UTSCallback?
}
public func openGameScreenByJs(_ options: OpenGameScreenOptionsJSONObject) -> Void {
    return openGameScreen(OpenGameScreenOptions(UTSJSONObject([
        "success": {
        (res: GameActionResult) -> Void in
        options.success?(res)
        },
        "fail": {
        (res: Any) -> Void in
        options.fail?(res)
        },
        "complete": {
        (res: Any) -> Void in
        options.complete?(res)
        }
    ])))
}
@objc(UTSSDKModulesNativeScreenPluginIndexSwift)
@objcMembers
public class UTSSDKModulesNativeScreenPluginIndexSwift : NSObject {
    public static func s_openGameScreenByJs(_ options: OpenGameScreenOptionsJSONObject) -> Void {
        return openGameScreenByJs(options)
    }
}
