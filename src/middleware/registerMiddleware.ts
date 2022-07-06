import {isEmail, isName, isValidPassword} from "../additionals/isValidInput"
import {Response, NextFunction} from "express"

export function registerMiddleware(request: any, response: Response, next: NextFunction){
	try{
		let email = request.body.email
		let password = request.body.password
		let name = request.body.name
		if(!isEmail(email)){
			response.send("invalid email")
		}else if(!isValidPassword(password)){
			response.send("Password must contain numbers, uppercase and lowercase letters")
		}else if(!isName(name)){
			response.send("name must be starts with Uppercase with no space and numbers")
		}else{
			next()
		}
	}catch(error){
		console.log(error)
	}
}