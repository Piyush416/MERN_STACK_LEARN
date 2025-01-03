const express = require('express');
const path = require('path')
const url = require("url")
const fs = require("fs");

const PORT = 3000
// default port number for backend is 3000


// create a instance name as app
const app = express()


// middlewares use to serve all the static file style.css any other file which was public
// we use app.use(express.static())
// style mera folder ka naam hai yaha pe folder ka dir chaiye hota hai
const public = path.join(__dirname,"./public/style");
app.use(express.static(public));
// for post method
app.use(express.json())
app.use(express.urlencoded({extended : true}))


const userData = require("./public/JSON/userData.json");
const { json } = require('stream/consumers');
const homePage = path.join(__dirname,"./public/html/index.html")
const conactPage = path.join(__dirname,"./public/html/contact.html")



// create a route for get request
// app.method_name()
app.get("/home", (req, res) => {
    // res.send(`
    //         <ul><button><a href="/home" >Home</a></button><button><a href="/contact" >contact</a></button><button><a href="/about" >about</a></button></ul>
    //         <h1>Welcome to Home Page</h1>
    //         `);

    res.sendFile(homePage);
})
app.get("/contact", (req, res) => {
    // res.send(`
    //             <ul><button><a href="/home" >Home</a></button><button><a href="/contact" >contact</a></button><button><a href="/about" >about</a></button></ul>
    //             <h1>Welcome to Contact Page</h1>
    //             `);

    res.sendFile(conactPage);
})


app.get("/about", (req, res) => {
    res.send(`
                <ul><button><a href="/home" >Home</a></button><button><a href="/contact" >contact</a></button><button><a href="/about" >about</a></button></ul>
                <h1>Welcome to about Page</h1>
                `);
})



// get method to fetch the data
// get the data and store in json file with get method
// app.get("/submit_form",(req,res)=>
//     {
//         const userInfo = path.join(__dirname,"./userInfo.json");
//         const fname = req.query.fname;
//         const lname = req.query.lname;
//         const profession = req.query.profession;
//         const uname = req.query.uname;
//         let data = {fname:fname,lname:lname,profession:profession,uname:uname};
//         console.log(data);
        
//         fs.readFile(userInfo,"utf-8",(err,fetchData)=>
//             {
//                 if(fetchData === "")
//                 {  
//                     data = [data];
//                    fs.writeFile(userInfo,JSON.stringify(data),(err)=>
//                     {
//                         if(err) console.log(err);
//                     })
//                     console.log("finished")
//                 }
//                 else
//                 {
//                     let obj = JSON.parse(fetchData);
//                     obj.push(data);
//                     fs.writeFileSync(userInfo,JSON.stringify(obj));
//                 }
            
//             })
        
//         res.send("Form Submitted SuccessFully")
//     })



// post method to fetch data 
app.post("/submit_form",(req,res)=>
    {
        let data = req.body;
        // console.log(data); // get undefine data 
        // because data is in json formate
        // so we use middle app.use(express.json())
        // now in modern browser data in urlencode to we use 
        // in middlewar app.use(express.urlencoded({extended : true}))
        // this will convert the encoded data to readable data
        console.log(data); // give the object
    })





























// api serve
app.get("/api/users", (req, res) => {
    // res.json({"success":"ok"})
    res.json(userData);
})

// dynamic route  according to user input render that data only
// app.get("/api/users/:enroll", (req, res) => {
//     // console.log(req.params.enroll); // always get a string data type
//     let userId = req.params.enroll;
//     const singleUser = userData.find((user) => {
//         return user.id == userId;
//     })

//     if (singleUser) {
//         res.json(singleUser);
//     } else {
//         res.json({ 
//             "Success": "FALSE", 
//             "Message": "User not found"
//          })
//     }
// })




// **************   
// mokaroo.com website is use to generate the json data file


// for all the post , put, delete
// app.all("/home",()=>{})



// app.method_name
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})