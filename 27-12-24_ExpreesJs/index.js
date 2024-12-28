const express = require('express');
const path = require('path')
const url = require("url")
const fs = require("fs");

const PORT = 3000
// default port number for backend is 3000


// create a instance name as app
const app = express()


// middlewar use to serve all the static file style.css any other file which was public
// we use app.use(express.static())
const public = path.join(__dirname,"./public/style");
app.use(express.static(public));


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


app.get("/submit_form",(req,res)=>
    {
        let parsedUrl = url.parse(req.url , true);
        let data = parsedUrl.query;
        const userInfo = path.join(__dirname,"./userInfo.json");
        fs.readFile(userInfo,"utf-8",(err,fetchData)=>
            {
                if(fetchData === "")
                {  
                    data = [data];
                   fs.writeFile(userInfo,JSON.stringify(data),(err)=>
                    {
                        if(err) console.log(err);
                    })
                    console.log("finished")
                }
                else
                {
                    let obj = JSON.parse(fetchData);
                    obj.push(data);
                    fs.writeFileSync(userInfo,JSON.stringify(obj));
                }
            
            })
        
        res.send("Form Submitted SuccessFully")
    })



app.get("/about", (req, res) => {
    res.send(`
                <ul><button><a href="/home" >Home</a></button><button><a href="/contact" >contact</a></button><button><a href="/about" >about</a></button></ul>
                <h1>Welcome to about Page</h1>
                `);
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


// dynamic route for job-title
// app.get("/api/users/:title",(req,res)=>
//     {
//         let userTitle = req.params.title;
//         console.log(userTitle);
        
//         let getData = userData.map((user)=>
//             {
//                 return user;
//             }).filter((user)=>
//                 {
//                     return user.job_title === "Sales Representative";
//                 });
            
        
//         res.json(getData);
//     })



// **************   
// mokaroo.com website is use to generate the json data file


// for all the post , put, delete
// app.all("/home",()=>{})



// app.method_name
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})