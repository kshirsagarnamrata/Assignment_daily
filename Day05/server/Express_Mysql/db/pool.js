const mysql2=require("mysql2")
const pool=mysql2.createPool({
    host:"localhost",
    user:"root",
    password:"maneger",
    database: "mern_project"

})

module.exports=pool