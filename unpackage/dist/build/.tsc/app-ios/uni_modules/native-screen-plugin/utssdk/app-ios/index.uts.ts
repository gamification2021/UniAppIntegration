import { OpenGameScreen, OpenGameScreenOptions, GameActionResult } from "../interface.uts"
import { UTSiOS } from "DCloudUTSFoundation"
import { Game, GameAction } from "GamificationFramework"

export const openGameScreen : OpenGameScreen = function (options : OpenGameScreenOptions) {
	DispatchQueue.main.async(execute = () : void => {
		const controller = UTSiOS.getCurrentViewController()

		Game.openGame(controller = controller, complition = (action : GameAction) : void => {
			let actionName : string = "default"
			switch (action) {
				case GameAction.back:
					actionName = "back"
					break
				default:
					actionName = "default"
					break
			}
			const res : GameActionResult = { action: actionName }
			options.success?.(res)
			options.complete?.(res)
		})
	})
}
