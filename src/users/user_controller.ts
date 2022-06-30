import {Router, Request, Response} from "express"
import {db} from "../mysql/connection"
import {middlewareAuth} from "../middleware/middlewareAuth"

export class UserController {
	router = Router()
	path = "/users"
	constructor(){
		this.intRoutes()
	}

	private intRoutes(){
		this.router.get(this.path, middlewareAuth, this.getAllUsers)
	}

	private getAllUsers = async (request:any, response: Response)=>{
		let [rows] = await db.query(`SELECT * FROM users`)
		response.send(rows)

	}
}