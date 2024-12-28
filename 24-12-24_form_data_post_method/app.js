const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const querystring = require('querystring')

const { log, error } = require('console')
const { json } = require('stream/consumers')
const PORT = 8080

const homePage = path.join(__dirname, "public/index.html")
const contactPage = path.join(__dirname, "public/contact.html")
const showUser = path.join(__dirname, "public/showUser.html")
const showUserStyle = path.join(__dirname, "public/showUserStyle.css")
const stylePage = path.join(__dirname, "public/style.css")
const myscriptJs = path.join(__dirname, "public/myscript.js")



const server = http.createServer((req, res) => {
    console.log("requested Url: ", req.url);

    const parsedUrl = url.parse(req.url);

    if (req.url === '/') {
        fs.readFile(homePage, "utf-8", (err, data) => {
            if (err) console.error(err);
            else {
                res.end(data);
            }

        })
    }
    else if (req.url === '/style.css') {
        fs.readFile(stylePage, "utf-8", (err, data) => {
            if (err) console.error(err);
            else {
                res.end(data);
            }

        })
    }
    else if (req.url === "/contact") {
        fs.readFile(contactPage, "utf-8", (err, data) => {
            if (err) console.error(err);
            else {
                res.end(data);
            }

        })
    }
    else if (parsedUrl.pathname === "/submit_form" && req.method === "POST") {
        // post data send the data by chunk by chunk not whole data completely
        // in the string format example -> "12 52 63 B5 like that data we received..."
        // here we use req.on() it will get complete data and convert into readable format 
        // chunks data know as stream format data cannot be readable
        // so we convert chunks data into to string
        let body = ""
        req.on("data", (chunks) =>  // data is the method which indicate that it will work till data is coming
        {
            // console.log(chunks); // it will print the chunk data which is not readble 
            // we convert this into string format to read the actual data
            // console.log(chunks.toString()); // it will provide me data in query format 

            // I want to access this chunk in req.on("end") then i will append it into body variable
            body = body + chunks;
        })

        req.on("end", () => {
            // no body data i can access here but it is in string format 
            // so i want to parse this data -> string to javaScript object
            // with the help of querystring module we can parse it 
            let parsedData = querystring.parse(body); // convert string to javascript object (parsed)

            fs.readFile("userInfo.json", "utf-8", (err, data) => {
                if (data === "") {
                    let mydata = [parsedData];
                    fs.writeFile("userInfo.json", JSON.stringify(mydata), (err) => {
                        if (err) console.log(err);
                    })
                }
                else {

                    parseObj = JSON.parse(data);
                    parseObj.push(parsedData);
                    fs.writeFile("userInfo.json", JSON.stringify(parseObj), (err) => {
                        if (err) console.log(err);
                    })
                }
                console.log("parsedData: ",parsedData);
                console.log("parsedData: ",parsedData.fname);
                res.write(`<h1>Hey, ${parsedData.fname} form submitted Throught <span> ${req.method} Method</span></h1>`);
                res.end(`<a href="/show_user">show user</a>`)
            })
            
        })
    }
    else if(req.url === "/api/json")
    {
        fs.readFile("userInfo.json","utf-8",(err,data)=>
            {
                if(err) console.log(err);
                else
                {
                    res.end(data);
                }
            })
    }
    else if (req.url === "/show_user") 
    {
        fs.readFile(showUser,"utf-8",(err,data)=>
        {
            if(err) console.log(err);
            else
            {
                let userInfoData = fs.readFileSync("userInfo.json","utf-8");
                if(userInfoData === "")
                {
                    res.write("<h1>No Submission Yet !</h1><br><br>");
                    res.end(`<a href = "/contact"><button type="submit">Submit Form</button></a>`)
                }
                else{
                res.end(data);
                }
            }
        })    
    }
    else if(req.url === "/showUserStyle.css")
    {
        fs.readFile(showUserStyle,"utf-8",(err,data)=>
        {
            if(err) console.log(err);
            else
            {
                res.end(data);
            }
        })
    }
    else if(req.url === "/myscript.js")
    {
        fs.readFile(myscriptJs,"utf-8",(err,data)=>
            {
                if(err) console.log(err);
                else
                {
                    res.end(data);
                }
            })
    }
    else if(req.url === "/errorStyle.css")
    {
        const errorStyle = path.join(__dirname,"/public/errorStyle.css");
        fs.readFile(errorStyle,"utf-8",(err,data)=>
            {
                if(err) console.log(err);
                else
                {
                    res.end(data);
                }
            })
    }
    else
    {
        const errorHtml = path.join(__dirname,"/public/error.html");
        fs.readFile(errorHtml,"utf-8",(err,data)=>
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

