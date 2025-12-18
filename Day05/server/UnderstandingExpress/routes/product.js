const express=require("express")
const router=express.Router()

router.get("/",(request,response)=>{
    response.send("all products")
})

router.post("/",(request,response)=>{
    response.send("display all products")
})
router.delete("/",(request,response)=>{
    response.send("delete the products")
})
router.put("/",(request,response)=>{
    response.send("update product")
})
module.exports=router