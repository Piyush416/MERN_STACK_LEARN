// http is module means it is part of nodejs means we do not need to install that
let http = require("http")
let PORT = 8080

// creating a server and store in a variable and named as app or server
// server handle two things request and response....
let app = http.createServer((req,res)=>
    {
        // server ke pass request aahi
        // but page load horaha hai why?????
        // because we donot close response;

        // request have header call request handle that contain metadata that request contain
        // console.log(req);

        // Give the pathName and also render for favicon icon
        console.log("Path Name: ",req.url);


        // here we send a response by .write() method
        // and then close the request

        // res.write is to send the data to the client
        // we can send data multiple times
        res.write("hello world");
        res.write("\nhello world1");
        res.write("\nhello world2");
        res.write("\nhello world3");
        // to close request this will close only one time
        res.end();


        //response header -> is the meta data that provide the information that what kind of data is contain status code
        // etc
    })

app.listen(PORT,()=>
    {
        console.log(`http://localhost:${PORT}`);
    })