import * as express from "express"
import {Express} from "express"
import * as cookieParser from "cookie-parser"
import * as bodyParser from "body-parser"

export class App{
	app
	port
	constructor(controllers:any[], port:number){
		this.app = express()
		this.port = port
		this.initMiddleware()
		this.initControllers(controllers)
		this.listen()

	}

	private initMiddleware(){
		this.app.use(cookieParser())
		this.app.use(bodyParser.json())
	}

	private initControllers(controllers: any[]){
		controllers.forEach((elem)=>{
			this.app.use("/",elem.router)
		})

	}

	private listen(){
		this.app.listen(this.port, ()=>{
			console.log("server works on ", this.port)
		})
	}
}
