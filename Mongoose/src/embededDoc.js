    //require module
const mongoose=require("mongoose");
    //create connection
mongoose.connect("mongodb://127.0.0.1:27017/Student",{useNewUrlParser:true});
    //Create schema for favoriteFood(embeded Schema)
const foodSchema=new mongoose.Schema({
    food:String,
    price:Number,
    quantity:String,
});
    //Create Schema for Student Data(Parent Document)
const DataSchema=new mongoose.Schema({
    name:String,
    age:Number,
    class:Number,
    favoriteFood:foodSchema,//embeded the foodSchema as a sub-document
});
    //define the model for parent schema
const Student=mongoose.model('Student',DataSchema);
    //create a new student with embeded address
const stu=new Student({
    name:"Saba Azeem",
    age:24,
    class:16,
    favoriteFood:{
        food:"firni",
        price:300,
        quantity:"large",
    }
});
    //now save it
stu.save();