const express = require("express")


const app = express();



// Settings the ejs engine
app.set("view engine", "ejs");

// Telling where my ejs files are
app.set("views", "./views")

app.get("/", (req,res) => 
{
    res.render("home", {title: 'WELCOME TO HOME PAGE', heading: "Welcome to Ejs Page"});
})

app.listen(8080, ()=>
    {
        console.log("server live");
        
    })