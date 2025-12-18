const express=require("express")
const studentRouter=require("./student")


const app=express()

app.use(express.json())
app.use('/students',studentRouter)


app.listen(4000,'localhost',()=>{
    console.log("server started at PORT- 4000");
})

