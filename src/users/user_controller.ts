import {Router, Request, Response} from "express"
import {db} from "../mysql/connection"
import {middlewareAuth} from "../middleware/middlewareAuth"
//import {RequestWithUser} from "../interfaces/requestWithUser"

export class UserController {
	router = Router()
	path = "/users"
	constructor(){
		this.intRoutes()
	}

	private intRoutes(){
		this.router.get(this.path, middlewareAuth, this.getAllUsers)
		this.router.get(`${this.path}/:id`, middlewareAuth, this.getUserById)
		this.router.put(`${this.path}/:id`, middlewareAuth, this.updateUser)
	}

	private getAllUsers = async (request:any, response:Response)=>{
		let [rows] = await db.query(`SELECT * FROM users`)
		response.send(rows)
	}

	private getUserById = async(request:any, response:Response)=>{
		try{
			let [rows]:any[] = await db.query(`SELECT * FROM users WHERE id = '${request.params.id}'`)
		    response.send(rows[0])

		}catch(error){
			response.send(error)

		}
	}

	private updateUser = async (request: any, response: Response)=>{
		try{
			let keys = ["name", "surname", "email", "sex", "image"]
			let user = request.user;
			if(user.id == request.params.id){
				let body = request.body
				for(let key in body){
					if(keys.includes(key)){
						this.updateValues(key, body[key], user.id)
					}
				}
				response.send("OK")

			}else{
				response.send("you cannot change others data")
			}

		}catch(error){
			response.send(error)

		}
	}

	private async updateValues(key: string, val:string, id:string){
		try{
			await db.query(`UPDATE users SET ${key} = '${val}' WHERE id = '${id}'`)
		}catch(error){
			console.log(error)
		}
	}
}


