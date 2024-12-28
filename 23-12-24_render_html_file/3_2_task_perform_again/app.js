const http = require('http')
const fs =require('fs')
const path = require('path')
const url = require('url')
const PORT = 9090

const contactPage = path.join(__dirname,"./public/contact.html");

const server = http.createServer((req, res) => 
{
    const parseUrl = url.parse(req.url,true);
    let formUrl = parseUrl.pathname;
    if(req.url == "/")
    {
        fs.readFile(contactPage,"utf-8",(err,data)=>
        {
                res.end(data);
                
        })
    }  
    else if(formUrl === "/submit_form")
    {

        let formObj = parseUrl.query;  // new object
        fs.readFile("userInfo.json","utf-8",(err,data)=>
            {
                if(data === "")
                {
                    fs.writeFile("userInfo.json",JSON.stringify([formObj]),(err)=>
                    {
                        if(err) console.log(err);
                    })
                }
                else
                {
                    // console.log(typeof data); // string me hai ye data iisme push use nhi kar sakhte hai 
                    let jsObj = JSON.parse(data); // abbh me iisme push operation use kar sakhta hu
                    jsObj.push(formObj);
                    fs.writeFileSync("userInfo.json",JSON.stringify(jsObj));       
                }
            })



        res.end(`<h1>Form submitted ${formObj.fname}</h1>`);
    }  
})

server.listen(PORT, () => {
    console.error(`http://localhost:${PORT}`);
})