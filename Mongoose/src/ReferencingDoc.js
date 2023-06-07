    //require module
    const mongoose=require("mongoose");
    //create connection
mongoose.connect("mongodb://127.0.0.1:27017/Teacher",{useNewUrlParser:true});
    //Create schema for favoriteFood(related document)
const foodSchema=new mongoose.Schema({
    food:String,
    price:Number,
    quantity:String,
});
    //Create Schema for Student Data(Parent Document)
const DataSchema=new mongoose.Schema({
    name:String,
    age:Number,
    favoriteFood:
    {
        type:mongoose.Schema.Types.ObjectId,// Reference to the _id field of the related document
        ref:"FavFood",// The name of the related model
    }
});
    //define the model for parent document
const Student=mongoose.model('Student',DataSchema);
    //define the model for related document
const FavFood=mongoose.model("FavFood",foodSchema);
    //create a new food
const stuFood=new FavFood({
    food:"firni",
    price:300,
    quantity:"large",
});
    //save the stuFood to db
stuFood.save();
    //create a new student with reference to the stuFood document
const stu=new Student({
    name:"Saba Azeem",
    age:24,
    class:16,
    favoriteFood:stuFood._id,
});
    //now save it
stu.save();