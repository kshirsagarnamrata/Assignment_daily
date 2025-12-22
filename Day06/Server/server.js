const express= require('express') //import express
const userRouter =require('./router/user')  //import router from user

const app = express() //create object of express

app.use(express.json()); //It reads JSON data sent by the client and converts it into a JavaScript object, making it available in req.body.
//create middleware
app.use((request,response,next )=>{
    const path=request.url
    if(path=='/user/signin'|| path == '/user/signup')
        next()
    else{
        response.send('you need to be authorized')
    }

})

app.use('/user',userRouter)

app.listen(4000,'localhost',()=>{
    console.log(`server is running at PORT 4000`);
});