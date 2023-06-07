    //require mongoose
const mongoose=require("mongoose");
    //create connection
mongoose.connect("mongodb://127.0.0.1:27017/People",{useNewUrlParser:true});
    //Create schema
const personSchema=new mongoose.Schema({
    name:String,
    age:Number
});
    //create model
const Person=mongoose.model("Person",personSchema);
    //create document
const person=new Person({
    name:"Saba Azeem",
    age:24
});
    //save it
person.save();