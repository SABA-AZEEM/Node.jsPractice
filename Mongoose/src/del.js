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

    // del a particular document

Fruit.deleteOne({_id:"6461942c0fcf4ff68e25d4ad"})
.then(()=>{
    console.log("deleted successfully");
})
.catch((err)=>{
    console.log("error is:"+err);
})
.finally(()=>{
    mongoose.connection.close();
});