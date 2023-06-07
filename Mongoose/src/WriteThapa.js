const mongoose= require("mongoose") ;
    //connect (create database),it return promises
mongoose.connect("mongodb://127.0.0.1:27017/sabadb",{useNewUrlParser:true, useUnifiedTopology: true })
.then(()=>console.log("db created"))
.catch((err)=>{
    console.log(err);
});
    //create schema(structure of document/blueprint)
    //here playlist is a obj
const playlistScehma=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now,
    }
});
    //create model(collection create)
    //here playlist is a class
    //model has 2 arguments,first is collection name that should be singular 's' added automatically behind the scene and it should be in capital form, and second is how it is structure means schema name
const Playlist=new mongoose.model("Playlist",playlistScehma);
    //create document and insert it
const createDocument=async()=>{
    try{
        const reactPlaylist=new Playlist({
            name:"node js",
            ctype:"back End",
            videos:50,
            author:"Saba Azeem",
            active:true,
        });
        const result=await reactPlaylist.save();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
createDocument();