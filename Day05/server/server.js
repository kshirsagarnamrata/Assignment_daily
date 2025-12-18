const express=require("express");
const app =express();
const PORT=4000

//GET :URL: http://Localhost:4000/test
app.get("/test",(request,response)=>{
    response.send("Hello from express server");
});
 
//GET
app.get("/fruits",(request,response) =>{
    let fruitArray = [
        { name: "Apple", color: "red", price: 100 },
        { name: "Banana", color: "yellow", price: 10 },
        { name: "Mango", color: "yellow", price: 50 },
        { name: "Stawberry", color: "red", price: 5 },
        { name: "Orange", color: "orange", price: 20 },
        { name: "Kiwi", color: "brown", price: 200 },
      ];

      response.send({
        status:"success",
        message:"data send",
        fruitArray: fruitArray,
      })
})


//POST
app.post("/login",(request,response)=>{
    response.send("POST method call");
});

//put
app.put("/update",(request,response)=>{
    response.send("put method called")
});

//DELETE
app.delete("/delete",(request,response)=>{
    response.send("DELETE method called")
});


//server start
app.listen(4000, () =>{
    console.log(`server started at port : ${PORT}`)
});
