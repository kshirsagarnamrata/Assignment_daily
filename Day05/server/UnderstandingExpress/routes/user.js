const express=require("express")
const router=express.Router()

router.get("/",(request,response)=>{
    response.send("all users")
})

router.post("/",(request,response)=>{
    response.send("display all users")
})
router.delete("/",(request,response)=>{
    response.send("delete the users")
})
router.put("/",(request,response)=>{
    response.send("update users")
})

module.exports=router