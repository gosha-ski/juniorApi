import {JwtPayload} from "jsonwebtoken"

export interface JwtId extends JwtPayload{
	id: string
}