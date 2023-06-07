//require file system
    const fs=require("fs");
//1:create a folder named it thapa
    // fs.mkdir("thapa",(err)=>{
    //     if(err) throw err;
    //     console.log("folder created successfully");
    // });
//2:create a file in it named bio.txt and data into it.
    // fs.writeFile("thapa/bio.txt","My name is Saba Azeem.",(err)=>{
    //     if(err) throw err;
    //     console.log("file creatd successfully");
    // });
//3:Append more data into it.
    // fs.appendFile("thapa/bio.txt","And My father name is Malik Mohammad Azeem.",(err)=>{
    //     if(err) throw err;
    //     console.log("data append successfully.");
    // });
//4:Read the data without getting the buffer data at first file encoding
    // fs.readFile("thapa/bio.txt","utf-8",(err,data)=>{
    //     if(err) throw err;
    //     console.log(data);
    // });
//5:Rename the file name to mybio.txt
    // fs.rename("thapa/bio.txt","thapa/mybio.txt",(err)=>{
    //     if(err) throw err;
    //     console.log("file rename successfully");
    // });
//6:del both file and folder
//del file
    // fs.unlink("thapa/mybio.txt",(err)=>{
    //     if(err) throw err;
    //     console.log("file deleted successfully");
    // });
//del folder
    // fs.rmdir("thapa",(err)=>{
    //     if(err) throw err;
    //     console.log("folder delted successfullly");
    // });