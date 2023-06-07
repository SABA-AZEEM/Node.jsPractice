// const fs=require("fs");
//1:create a folder named it thapa
    // fs.mkdirSync("thapa");

//2:create a file in it named bio.txt and data into it.
    // fs.writeFileSync("thapa/bio.txt","My name is SABA AZEEM.");
//3:Append more data into it.
    // fs.appendFileSync("thapa/bio.txt"," And my father name is  Malik Muhammad Azeem.");
//4:Read the data without getting the buffer data at first file encoding
    // const data=fs.readFileSync("thapa/bio.txt","utf-8");
    // console.log(data);
//5:Rename the file name to mybio.txt
    // fs.renameSync("myBio.txt","thapa/mybio.txt");
//6:del both file and folder
//del file
    // fs.unlinkSync("thapa/bio.txt");
//del folder
    // fs.rmdirSync("thapa");