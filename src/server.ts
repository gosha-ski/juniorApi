import {App} from "./app"
import {UserController} from "./users/user_controller"
import {AuthController} from "./auth/auth_controller"


try{
	const app = new App([
		new UserController(),
		new AuthController()
	], 3000)

}catch(error){
	console.log(error)
}
