    //it return method
const express=require('express');
const app=express();
    //routing through express
app.get('/',(req,res)=>{
    res.send("Welcom to my home page");
});
app.get('/about',(req,res)=>{
    res.send("Welcome to my about page.");
});
app.get('/contact',(req,res)=>{
    res.send("welcome to my contact page");
})
app.get('/temp',(req,res)=>{
    res.status(404).send("welcome to my temp page");
})

    //listen 
app.listen(8000,()=>{
    console.log("listening the port at 8000");
})