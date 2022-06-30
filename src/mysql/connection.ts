import * as mysql from "mysql2"
  
export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "TEST_JUN_API",
  password: "mynewpassword"
}).promise()







