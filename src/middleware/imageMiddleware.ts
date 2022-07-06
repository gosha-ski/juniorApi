import * as fs from "fs"
import {checkFormat} from "../additionals/checkFormat"
import {db} from "../mysql/connection"

export function imageMiddleware(request:any, response:any, next:any){
	try{
		request.on("data", (chunk:Buffer)=>{
			
			let type = request.headers["content-type"].split("/")[1]
			
			if(checkFormat(chunk, type)){
				db.query(`UPDATE users SET image='/images/${request.user.id}/image.${type}'`)
				fs.writeFileSync(process.cwd()+`/images/${request.user.id}/image.${type}`, chunk)
			}
		})
		next()
	}catch(error){
		console.log(error)

	}
}


