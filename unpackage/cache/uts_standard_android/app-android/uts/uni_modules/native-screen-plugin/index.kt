@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uts.sdk.modules.nativeScreenPlugin
import android.content.Intent
import android.os.Handler
import android.os.Looper
import com.app.spin_and_win.SpinAndWinActivity
import io.dcloud.uniapp.*
import io.dcloud.uniapp.extapi.*
import io.dcloud.unicloud.*
import io.dcloud.uts.*
import io.dcloud.uts.Map
import io.dcloud.uts.Set
import kotlin.properties.Delegates
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Deferred
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.async
import io.dcloud.uts.UTSAndroid
open class GameActionResult (
    @JsonNotNull
    open var action: String,
) : UTSObject(), IUTSSourceMap {
    override fun `__$getOriginalPosition`(): UTSSourceMapPosition? {
        return UTSSourceMapPosition("GameActionResult", "uni_modules/native-screen-plugin/utssdk/interface.uts", 1, 13)
    }
}
open class OpenGameScreenOptions (
    open var success: ((res: GameActionResult) -> Unit)? = null,
    open var fail: ((res: Any) -> Unit)? = null,
    open var complete: ((res: Any) -> Unit)? = null,
) : UTSObject(), IUTSSourceMap {
    override fun `__$getOriginalPosition`(): UTSSourceMapPosition? {
        return UTSSourceMapPosition("OpenGameScreenOptions", "uni_modules/native-screen-plugin/utssdk/interface.uts", 4, 13)
    }
}
typealias OpenGameScreen = (options: OpenGameScreenOptions) -> Unit
val openGameScreen: OpenGameScreen = fun(options: OpenGameScreenOptions) {
    val activity = UTSAndroid.getUniActivity()!!
    Handler(Looper.getMainLooper()!!).post(fun(): Unit {
        try {
            val intent = Intent(activity, SpinAndWinActivity().javaClass)
            activity.startActivity(intent)
            val res = GameActionResult(action = "success")
            options.success?.invoke(res)
            options.complete?.invoke(res)
        }
         catch (e: Exception) {
            options.fail?.invoke("error: " + e.toString())
            options.complete?.invoke("error")
        }
    }
    )
}
open class OpenGameScreenOptionsJSONObject : UTSJSONObject() {
    open var success: UTSCallback? = null
    open var fail: UTSCallback? = null
    open var complete: UTSCallback? = null
}
fun openGameScreenByJs(options: OpenGameScreenOptionsJSONObject): Unit {
    return openGameScreen(OpenGameScreenOptions(success = fun(res: GameActionResult): Unit {
        options.success?.invoke(res)
    }
    , fail = fun(res: Any): Unit {
        options.fail?.invoke(res)
    }
    , complete = fun(res: Any): Unit {
        options.complete?.invoke(res)
    }
    ))
}
