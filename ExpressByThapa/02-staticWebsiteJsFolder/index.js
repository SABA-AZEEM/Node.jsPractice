    //require packages
const express= require('express');
const app= express();
const path=require('path');
    //get path
app.use(express.static(path.join(__dirname,"../02-staticWebsite")));

app.listen(8000,()=>{
    console.log("listening...");
})
//to access this html page with css file: we apply this url:
// localhost:8000/html
//otherwise it can get error
//lekin asool yhi hai k html file ko kisi folder mai mt bnao or yhi path de do, phr koi error nhi ae ga or css b khud apply ho jae gi