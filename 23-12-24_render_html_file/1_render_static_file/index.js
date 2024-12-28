const http = require('http')
const fs = require('fs')
const path = require('path');
const { log } = require('console');
const PORT = 8080



const homePage = path.join(__dirname,"public/index.html");
const stylePage = path.join(__dirname,"public/style.css");
const imgPage = path.join(__dirname,"public/img1.jpg");


const server = http.createServer((req, res) => {
    console.log("requesting url: ",req.url);
    
    if (req.url === "/")
    {
        fs.readFile(homePage, "utf-8", (err, data) => {
            if (err) console.log(err);
            else 
            {   
                res.end(data);
            }
        })
    }
    // index.html file also route the style.css because me means inside html file
    // so index.html again req.url for style.css
    else if(req.url === "/style.css")
    {
        fs.readFile(stylePage, "utf-8", (err,data)=>
        {
            if(err) console.log(err);
            else
            {
                res.end(data);
            }
        })
    }

    // simillary we attach img so index.html also req.url for /img1.jpg
    else if(req.url == "/img1.jpg")
    {
        fs.readFile(imgPage,"utf-8",(err,data)=>
            {
                if(err) console.log(err);
                else
                {
                    res.end(data);
                }
                
            })
    }
})

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})