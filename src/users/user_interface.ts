import {RowDataPacket} from "mysql2"

export interface UserInterface extends RowDataPacket{
	id: string;
	name: string;
	surname:string;
	email:string;
	password:string;
	a: number;
}