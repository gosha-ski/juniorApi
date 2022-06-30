import * as jwt from "jsonwebtoken"
import {db} from "../mysql/connection"
import {Response, NextFunction} from "express"
import {RequestWithUser} from "../interfaces/requestWithUser"
import {UserInterface} from "../users/user_interface"

export async function middlewareAuth(request:any, response:Response, next: NextFunction){
	try{
		let cookies = request.cookies
		let data:any = jwt.verify(cookies.AccessToken, "jwt_key")
	    let [rows]:any[] =(await db.query(`SELECT * FROM users WHERE id = '${data.id}'`))
	    if(rows[0]){
	    	let user = rows[0]
	    	request.user = {
	    		id: user.id,
	    		email: user.email
	    	}
	    	next()
	    }else{
	    	response.send("some middleware exception")
	    }
	}catch(error){
		response.send(error)

	}
}