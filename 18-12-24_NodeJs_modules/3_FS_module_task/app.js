// ----------------------          TASK 1    -----------------------------------------
// const { parse } = require("path");
// const url = require("url");
// const { parseEnv } = require("util");

// let myUrl = "https://www.google.com/search?q=adidas&sca_esv=3"

// let paresUrl = url.parse(myUrl);
// if(paresUrl.pathname == "/search")
// {
//     console.log("Welcome to Search Page");
// }
// else
// {
//     console.log("Not a correct route")
// }

//another method is to do using method also
// const {URL} = require("url");
// newUrl = new URL(myUrl);
// console.log(newUrl);


// ------------------------ TASK 2 ------------------------------
// we have one file which contain array of object 
// we fetch new object from api json 
// and we want to append the object in the file and remaining data must be remain




// ****Note 
// JSON.stringify ---> // JSON Object to JSON String
// JSON.parse --------> // JSON String to JAVASCRIPT Object

const { log } = require("console");
const fs = require("fs")

let obj = [{
    "name": "Jay",
    "year": 2023
}]

fs.readFile("employee.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        const jsonData = JSON.parse(data);
        jsonData.push(obj);
        fs.writeFile("employee.json", JSON.stringify(jsonData), (err) => {
            if (err) console.log(err);
        });
    }
})




