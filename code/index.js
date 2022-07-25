const express=require('express');
require('dotenv').config();

const app=express();
console.log("it on server")
const port =process.env.PORT||6000;


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Home.html");
  });



app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})