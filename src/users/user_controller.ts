import {Router, Request, Response} from "express"
import {db} from "../mysql/connection"
import {middlewareAuth} from "../middleware/middlewareAuth"
import * as fs from "fs"
import {imageMiddleware} from "../middleware/imageMiddleware"


export class UserController {
	router = Router()
	path = "/profile"
	constructor(){
		this.intRoutes()
	}

	private intRoutes(){

		this.router.get(`${this.path}s`, middlewareAuth, this.getAllUsers)
		this.router.get(`${this.path}/:id`, middlewareAuth, this.getUserById)
		this.router.put(`${this.path}/:id`, middlewareAuth, imageMiddleware, this.updateUser)
		this.router.get(`${this.path}/:id/image`, middlewareAuth, this.getUserImage)
	}

	private getAllUsers = async (request:any, response:Response)=>{
		try{
			let query = request.query
			let [rows] = await db.query(`SELECT * FROM users ORDER BY date LIMIT ${(Number(query.page)-1)*10}, 10`)
		    response.send(rows)

		}catch(error){
			response.send(error)
		}
	}

	private getUserById = async(request:any, response:Response)=>{
		try{
			let [rows]:any[] = await db.query(`SELECT * FROM users WHERE id = '${request.params.id}'`)
			let user = rows[0]
			response.send(user)
		}catch(error){
			response.send(error)

		}
	}

	private getUserImage = async(request: any, response: Response)=>{
		try{
			let [rows]:any[] = await db.query(`SELECT * FROM users WHERE id = '${request.params.id}'`)
			let user = rows[0]
			response.sendFile(process.cwd()+`${user.image}`)
		}catch(error){
			response.send(error)
		}
	}

	private updateUser = async (request: any, response: Response)=>{
		try{
			let keys = ["name", "surname", "email", "sex", "image"]
			//console.log(request)
			let user = request.user;
			if(user.id == request.params.id){
				let body = request.body
				for(let key in body){
					if(keys.includes(key)){
						await db.query(`UPDATE users SET ${key} = '${body[key]}' WHERE id = '${user.id}'`)
					}else{
						response.write(`${key} was not changed\n`)
					}
				}
				response.end("OK")
			}else{
				response.send("you cannot change others data")
			}

		}catch(error){
			response.send(error)

		}
	}

}



