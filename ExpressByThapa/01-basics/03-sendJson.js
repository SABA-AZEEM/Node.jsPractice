    //get express module
const express=require('express');
const app=express();
    //send json data,method-1
// app.get('/',(req,res)=>{
//     res.send(
//         [
//         {
//             name:'saba',
//             age:24,
//             study:"it",
//         },
//         {
//             name:'saba',
//             age:24,
//             study:"it",
//         },
//         {
//             name:'saba',
//             age:24,
//             study:"it",
//         },
//         {
//             name:'saba',
//             age:24,
//             study:"it",
//         },
//         ]
//     )
// });
    //send json data method-2
app.get('/',(req,res)=>{
    res.json(
        [
                    {
                        name:'saba',
                        age:24,
                        study:"it",
                    },
                    {
                        name:'saba',
                        age:24,
                        study:"it",
                    },
                    {
                        name:'saba',
                        age:24,
                        study:"it",
                    },
                    {
                        name:'saba',
                        age:24,
                        study:"it",
                    },
                    ]
    )
})
    //listening
app.listen(8000,()=>{
    console.log("listening...");
})


//so what is diff b/w app.send() & app.json() for send obj,both send the same as json format,the diff are:
// In Express.js, app.send() and app.json() are both methods that can be used to send a response back to the client in JSON format, but they serve different purposes.

// app.send() is used to send a response back to the client with a string or buffer as the body of the response. It sets the Content-Type header to "text/html" or "application/octet-stream" by default, but you can override this by setting the Content-Type header explicitly using res.set(). When app.send() is used to send an object, it automatically sets the Content-Type header to "application/json" and uses JSON.stringify() to convert the object to JSON format.

// app.json() is specifically used to send a JSON response back to the client. It sets the Content-Type header to "application/json" and uses JSON.stringify() to convert the object to JSON format. Unlike app.send(), it does not allow you to send a string or buffer as the body of the response.

// In summary, app.send() is a more general-purpose method that can be used to send any type of response, whereas app.json() is a more specific method that is used specifically for sending JSON responses. When sending an object, both methods will automatically convert the object to JSON format and set the Content-Type header to "application/json"