    //require modules

const mongoose=require("mongoose");

    //create connection

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB",{useNewUrlParser:true});

    //Create Schema

const fruitSchema=new mongoose.Schema({
    rating:Number,
    review:String,
    name:String,
});

    //Create Model

const Fruit=mongoose.model("Fruit",fruitSchema);

    //Find Data, Fruit.find() will return all the documents present in the "fruits" collection. The documents are returned in an array which is logged to the console. If there is an error in finding the documents, it will be logged to the console.

Fruit.find()
.then((fruits)=>{
    console.log(fruits);
})
.catch((err)=>{
    console.log(err);
})

            //only display name of fruits

    // Fruit.find()
    // .then((fruits)=>{
        //when we perform the last action,it's good practice to close the db connection, so we don't need to close it with ctrl+c
    //     mongoose.connection.close();
    //     fruits.forEach((element)=>{
    //         console.log(element.name);
    //     })
    // })
    // .catch((err)=>{
    //     console.log(err);
    // });