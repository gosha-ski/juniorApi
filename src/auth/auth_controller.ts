import {Router, Request, Response} from "express"
import * as jwt from "jsonwebtoken" 
import {db} from "../mysql/connection"
import * as hash from "object-hash"
import * as uniqid from "uniqid"

export class AuthController{
	router = Router()
	path = "/auth"
	constructor(){
		this.intRoutes()
	}

	private intRoutes(){
		this.router.post(`${this.path}/login`, this.login)
		this.router.post(`${this.path}/register`, this.register)

	}

	private login = async (request: Request, response:Response)=>{
		try{
			const body = request.body
		    let [rows]:any[] = await db.query(`SELECT * FROM users WHERE email = '${body.email}'`)
		    if(rows[0]){
		    	let user = rows[0]
		 
		    	if(user.password == hash(body.password)){
		    		let token = jwt.sign({id: user.id}, "jwt_key", {expiresIn: 3600})
		    		response.cookie("AccessToken", token)
		    		response.send("success sign in")
		    	}else{
		    		response.send("invalid password")
		    	}
		    }else{
		    	response.send("email not found")
		    }

		}catch(error){
			response.send(error)
		}
	}

	private register = async (request: Request, response:Response)=>{
		try{
			let body = request.body
			let [rows]:any[] = await db.query(`SELECT * from users WHERE email='${body.email}'`)
			if(rows[0]){
				response.send("user with same email already registed")
			}else{
				
				await db.query(`INSERT INTO users (id, name, email, password) 
					VALUES ('${uniqid()}', '${body.name}', '${body.email}', '${hash(body.password)}')`)

				response.send("success sign up")
			}

		}catch(error){
			response.send(error)

		}

	}
}
