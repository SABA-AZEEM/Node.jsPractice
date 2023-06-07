    //require mongoose

const mongoose=require("mongoose");

    //create connection if db exist & if not exist then db created and connection establish

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB",{useNewUrlParser:true});

    //create schema(structure/blueprint of document)

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

    //create model(collection create),here "const Fruit" is the class, and 1st argument is the name of collection(singular b/c mongoose convert it in plural automatically,capitalized,in string format) and 2nd argument is schema name.

const Fruit=mongoose.model("Fruit",fruitSchema);

    //create document,in which "fruit" is document name create from Fruit(model)

const apple=new Fruit({
    name:"Apple",
    rating:7,
    review:"It's a good fruit."
});
const orange=new Fruit({
    name:"orange",
    rating:6,
    review:"It's a very good fruit."
});
const banana=new Fruit({
    name:"banana",
    rating:9,
    review:"It's a very very good fruit."
});
    //use for check validation
const kiwi=new Fruit({
    
    rating:9,
    review:"It's a very very good fruit."
});

    //now for insert many we use method that start with model name and it takes 2 arguments ,1st array of fruits,2nd is callback function for error

// Fruit.insertMany([apple,banana,orange]).then(() => {
//     console.log("successfully saved all fruits in fruitsDB.");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

    //now save it.Save() sava the "fruit(document)" into "Fruit(Collection) inside the "fruitsDB",this is when we add a  single document

kiwi.save();
