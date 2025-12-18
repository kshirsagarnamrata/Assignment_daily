const express=require("express")
const pool=require("../db/pool")
const result=require("../util/result")


const router=express.Router()

router.get("/",(request,response)=>{
    const sql=`SELECT *FROM students`
     pool.query(sql,(error,data)=>{
        response.send(result.createResult(error,data))
     }
    )
})

router.post("/",(request,response)=>{
      const {reg_no,name, email, course_id,mobile_no,profile_pic } = request.body
    const sql = `INSERT INTO students(reg_no,name, email, course_id,mobile_no,profile_pic) VALUES(?,?,?,?,?,?)`
    pool.query(sql, [reg_no,name, email, course_id,mobile_no,profile_pic], (error, data) => {
        response.send(result.createResult(error, data))
    })

})

 router.put("/",(request,response)=>{
          const {email ,name} = request.body
       const sql=`UPDATE students SET email=? where name=?`
       pool.query(sql,[email,name],(error,data)=>{
        response.send(result.createResult(error,data))
       })
})


 router.delete("/",(request,response)=>{
    const  {reg_no,name, email, course_id,mobile_no,profile_pic } = request.body
    const sql=`DELETE FROM students WHERE name=?`
  pool.query(sql,[name],(error,data)=>{
    response.send(result.createResult(error,data))
  })
} )

module.exports=router