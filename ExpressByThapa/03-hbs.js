    //require the module
const express=require('express');
const app=express();
const path=require('path');
    // agr partials ko use krna to hbs(template engine) ko require krna pre ga phr usko register krna pre ga
const hbs=require('hbs');
    //set the template engine,if default dir name(views) is set
app.set("view engine","hbs");
    //by default hm "views" hi nam de skte dir ka jis mai hmari ".hbs" file ho gi, lekin age hm nam change kr dete to error ae ga, to agr hm chahte k wo error na ae to hme ye line likhni ho gi,yani k hme browser ko btana ho ga k views folder ka path kia hai
const templatePath=path.join(__dirname,"./03-templates/views");
app.set("views",templatePath);
    //template engine ko register krna ta k partials ka istimal kr ske
const partialsPath=path.join(__dirname,"./03-templates/partials")
hbs.registerPartials(partialsPath);
    //template engine route(we can insert "",instead of "/")
app.get("/",(req,res)=>{
    res.render("index",{
        view_template:"hbs",//set obj for dynamic html
    });
});
    //for about page
app.get("/about",(req,res)=>{
    res.render("about");
})
    //node top to bottom approach ko follow krta,to hme * se pehle wo sari cheeze likh leni jo hm chahte k show ho wrna baqi sb k liye neeche wala error show hoga, ab agr mai chahti k about k ander koi kisi page pr jae to ye error ae:"this about us page not found"a
app.get("/about/*",(req,res)=>{
    res.render("404",{
        errorComment:"this about us page not found",
    })
})
    //if user type in the url with the page that's not exist
app.get("*",(req,res)=>{
    res.render("404",{
        errorComment:"Page not found",
    })
})
    //listen
app.listen(8000,()=>{
    console.log("listening...");
})