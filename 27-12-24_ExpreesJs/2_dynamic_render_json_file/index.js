const express = require('express')
const path = require("path")


const app = express();


// PORT
const PORT = 3000;

// require json file
const userData = require("./public/JSON/userData.json") // this will give the array of object means JavaScript Object
// not json object remember that..........


// relative path
const htmlPage = path.join(__dirname,"./public/html/index.html")
const getId = path.join(__dirname,"./public/html/getId.html")
const style = path.join(__dirname,"./public/style");





// render the json file
app.get("/",(req,res)=>
    {
        res.json(userData);
    })


// server json data according to user given by id
// render the dynamic json file
app.get("/api/json/:id",(req,res)=>
    {
        let userId = req.params.id;
        // find method only find the first element and then stop 
        let singleData = userData.find((element)=>
            {
                return element.id = userId;
            })
        res.json(singleData);
    })



// render all the data given by user as specific job_title
// app.get("/api/json/:jobTitle",(req,res)=>
//     {
//         let jobTitle = req.params.jobTitle;
        
//         let specificData = userData.map((element)=>
//             {
//                 return element;
//             }).filter((element)=>
//                 {
//                     return element.job_title === jobTitle;
//                 })
            
//         res.json(specificData);
//     })


app.listen(PORT,()=>
    {
        console.log(`http://localhost${PORT}`);
    })