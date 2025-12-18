const express=require("express")

const router=express.Router()

router.get("/",(request,response)=>{
    response.send("all orders data")
})

router.post("/",(request,response)=>{
    response.send("add orderd data")
})

router.put("/",(request,response)=>{
    response.send("Update the orders data")
})

router.delete("/",(request,response)=>{
    response.send("Delete the orderd data")
})

module.exports=router