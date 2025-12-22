const express= require('express')

const userRouter =require('./router/user')
const authUser=require('./util/auth')
const app = express()


//middlewares
app.use(express.json())
app.use(authUser)
app.use('/user',userRouter)

app.listen(4000, 'localhost',()=>{
    console.log(`server is running at PORT 4000`);
});