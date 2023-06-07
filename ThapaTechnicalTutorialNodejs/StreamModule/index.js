//Creating a readable stream
    // const fs=require("fs");
    // var data="";
    // const readableStream=fs.createReadStream("file.txt");
    // readableStream.setEncoding('utf-8');
    // readableStream.on("data",chunk=>{
    //     data +=chunk;
    // });
    // readableStream.on("end",()=>{
    //     console.log(data);
    // });
    // readableStream.on("error",err=>{
    //     console.log(err);
    // });
//create a writeable stream
    // var fs=require("fs");
    // var data="this is my new writeable file.";
    // const writeStream=fs.createWriteStream("writeFile.txt");
    // writeStream.write(data,'utf-8');
    // writeStream.end();
    // writeStream.on('finish',()=>{
    //     console.log("writing completed.");
    // })
    // writeStream.on("error",err=>{
    //     console.log(err.stack);
    // });
    // console.log("task completed");
//piping the streams
    // const fs=require("fs");
    // const readStream=fs.createReadStream("file.txt");
    // const writeStream=fs.createWriteStream("writeFile.txt");
    // readStream.pipe(writeStream);
    // console.log("program ended");