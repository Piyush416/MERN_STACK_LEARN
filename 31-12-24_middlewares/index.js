const express = require("express")

const app = express();


//custom middlewar function
function log(req,res,next){
    console.log(req.url);
    next(); // next is use for going to next route or next middlewar
}

//custom middlewar
// app.use(log);
//this middle war runner before every route


//route 1
app.get("/",(req,res)=>
    {
        console.log("First Route")
        res.send("Welcome to Home Page");
    })


app.use(log)
//this middle war not run for 1st route
// route 2
app.get("/2",(req,res)=>
    {
        console.log("Second Route")
        res.send("Welcome to Second Route Page");
    })
    
// route 3
// this middlewar run only for 3 route 
app.get("/3", (req,res,next)=>{console.log("3 route middle war run only for 3route"); next()},(req,res)=>
    {
        console.log("third Route")
        res.send("Welcome to Third Route Page");
    })


app.get("/4",(req,res)=>
    {
        console.log("Fourth Route")
        res.send("Welcome to Fourth Route Page");
    })



app.listen(2000,()=>
    {
        console.log(`http://localhost:2000`);
    })