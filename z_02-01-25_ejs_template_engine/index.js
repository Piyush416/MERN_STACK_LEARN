const express = require("express")
const path = require("path")

const app = express();

const style = path.join(__dirname,"./public")
console.log(style)


app.use(express.static(style))


// Settings the ejs engine
app.set("view engine", "ejs");

// Telling where my ejs files are
app.set("views", "./views")

app.get("/", (req,res) => 
{
    const isUserLogged = true;
    res.render("home", {title: 'WELCOME TO HOME PAGE', heading: "Welcome to Ejs Home Page", isUserLogged});
})

app.get("/about", (req,res) => 
{
    res.render("about", {title: 'WELCOME TO About PAGE', heading: "Welcome to Ejs About Page"});
})

app.listen(8080, ()=>
    {
        console.log("server live");
        
    })