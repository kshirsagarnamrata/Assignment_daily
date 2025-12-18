const express=require("express")
const orderRouter =require("./order")
const productRouter=require("./product")
const usersRouter=require("./user")
const app=express()


app.use("/orders",orderRouter)
app.use("/products",productRouter)
app.use("/users",usersRouter)

app.listen(4000,'localhost',()=>{
    console.log("server started at PORT- 4000");
})