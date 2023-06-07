const EventEmitter=require('events');
//create an instance of the event
const myEmitter=new EventEmitter();
//Register an event listener(just like func def)
myEmitter.on('myEvent',(statusCode,parameter)=>{
    console.log(`An Event Occured with Status Code: ${statusCode} & data: ${parameter}`);
});
//Fire the event or Emit the event(just like func call)
myEmitter.emit("myEvent",200,"argument");