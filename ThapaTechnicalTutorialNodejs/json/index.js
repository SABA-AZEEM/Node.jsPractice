const fs=require("fs");

const myData={
    myName:"saba azeem",
    age:24,
    class:14,
    Department:"BS-IT"
}
//convert obj into json format
    // const jsonData=JSON.stringify(myData);
//create file
    // fs.writeFile('json1.json',jsonData,(err)=>{
    //     console.log("done");
    // })
//read json file
    fs.readFile('json1.json','utf-8',(err,data)=>{
        const orgData=JSON.parse(data);
        console.log(data);
        console.log(orgData);
    })