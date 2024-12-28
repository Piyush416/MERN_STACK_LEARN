const http = require('http');
const fs = require('fs');
const url = require('url')
const path = require('path');
const { log } = require('console');
const { loadEnvFile } = require('process');
const { userInfo } = require('os');
const PORT = 8080;

const HomePage = path.join(__dirname, "./public/index.html")
const ContactPage = path.join(__dirname, "./public/contact.html")
const StylePage = path.join(__dirname, "./public/style.css")

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    const formurl = parseUrl.pathname;


    if (req.url === "/") {
        fs.readFile(HomePage, "utf-8", (err, data) => {
            res.end(data);
        })
    }
    else if (req.url === "/contact") {
        fs.readFile(ContactPage, "utf-8", (err, data) => {
            if (err) console.log(err);
            else {
                res.end(data);
            }

        })
    }
    else if (req.url === "/style.css") {
        fs.readFile(StylePage, "utf-8", (err, data) => {
            if (err) console.log(err);
            else {
                res.end(data);
            }

        })
    }
    else if (formurl === "/submit_form") {

        let JSONObj = parseUrl.query;
        fs.readFile("formSubmitInfo.json", "utf-8", (err, data) => {
            if (err) console.log(err);
            else {
                if (data === "") {
                    JSONObj = [JSONObj];
                    fs.writeFile("formSubmitInfo.json", JSON.stringify(JSONObj), (err) => {
                        if (err) console.log(err);
                    })
                }
                else
                {
                    // data -> inside is a string type 
                    // so we convert it into object from JSON.parse()
                    // JSON String convert into JavaScript Object using parse
                    // console.log(typeof data); // output -> string
                    // console.log(typeof JSON.parse(data)); // output -> object

                    
                    const jsondata = JSON.parse(data);
                    jsondata.push(JSONObj);
                    fs.writeFile("formSubmitInfo.json", JSON.stringify(jsondata), (err) => {
                        if (err) console.log(err);
                    })
                }
            }
        })







        let name = parseUrl.query.fname
        res.write(`<h1>Hey, ${name} your response as been submitted.</h1>`);
        res.end(`<a href="/contact">Submit another response</a>`);
    }
    else {
        res.write("<h1>Page is in working ..........</h1>")
        res.end();
    }
})


server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);

})