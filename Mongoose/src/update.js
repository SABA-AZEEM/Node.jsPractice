    //require modules

const mongoose=require("mongoose");

    //create connection

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB",{useNewUrlParser:true});

    //create schema

    const fruitSchema=new mongoose.Schema({
        //apply validation
        name:{
            type:String,
            // required:[true,"Fruit name is required."],
            min:2,
            max:10,
        },
        rating:Number,
        review:String,
    });

    //create model

const Fruit=mongoose.model("Fruit",fruitSchema);

    //update the particular document

Fruit.updateOne({name:"orange"},{name:"ORANGE"})
.then(()=>{
     //connection close
    mongoose.connection.close();
    console.log("document update successfully.");
})
.catch((err)=>{
    console.log(err);
})

   