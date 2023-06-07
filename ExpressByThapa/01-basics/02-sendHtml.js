    //require module
const express=require('express');
const app=express();
    //routing and send html
app.get('/',(req,res)=>{
    res.write("<h1>Hello! Welcome to my home page</h1>");
    res.write("<h2>My name is Saba Azeem.</h2>");
    res.send();//to tell the browser that our html terminate
});
app.listen(8000,()=>{
    console.log("listening...");
})