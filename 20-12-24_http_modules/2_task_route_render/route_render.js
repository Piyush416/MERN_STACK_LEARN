let http = require("http")
let fs = require("fs");
const { error } = require("console");
let app = http.createServer((req, res) => {


    // append the entry in log.txt 
    let d = new Date();

    let time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    let date = `${d.getDate}/${d.getMonth}/${d.getFullYear}`

    let data = req.url;
    
    if (data != "/favicon.ico") {
        fs.appendFile("log.txt", `Request received:${data}\t\t\tReceived At->Date:${date} Time:${time}\n`, (err, data) => {
            if (err) {
                console.error(err);
            }
        })
    }


    let route = req.url

    if (route === "/") {
        res.write("<h1>Welcome to Home Page</h1>");

        res.end()
    } else if (route === "/about") {
        res.end("<h1>Welcome to about Page</h1>");
    }
    else if (route === "/contact") {
        res.end("<h1>Welcome to Contact Page</h1>");
    }
    else {
        res.end("<h1>404: Page Not Found </h1>");
    }
})


app.listen(8080, () => {
    console.log("server is listen on 8080 port");

});