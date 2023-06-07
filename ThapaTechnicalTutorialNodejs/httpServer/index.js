const http=require("http");
//routing through node.js
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        // res.statusCode=200;
        // res.setHeader('Content-Type','text/plain');
        res.end("hello world! \n");
    }
    else if(req.url==='/About'){
        res.end("this is about page \n");
    }else if(req.url==='/Home'){
        res.end("this is home page \n");
    }else{
        res.writeHead(404,{"Context-Type":"html/plain"});
        res.end("<h1>404 Error page not exist!</h1> \n");
    }
});
server.listen(3000,"192.168.10.11",()=>{
    console.log("listening....");
})