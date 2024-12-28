const { log } = require('console')
let url = require('url')
let myUrl = "https://www.youtube.com/watch?v=Vbu5F7PSH9o&ab_channel=SRPAY"

// https://www.youtube.com/watch?v=Vbu5F7PSH9o&ab_channel=SRPAY
// https -> protocol
// www.youtube.com -> domain/hostName
// /all -> path
// /watch  -> path Name 
// ?q  -> query ya condition ya parameter
// & -> seperater

// it will return the object and whole query in the string
// let parsedUrl = url.parse(myUrl)
// console.log(parsedUrl);


// we want each query seperated then i use true as another parameter
let parsedUrl = url.parse(myUrl, true)
//query is in object
console.log(parsedUrl);




/////////////////////////////////////////////////////////////////////////////////

// fs module 

const fs = require("fs")

// write
// fs.writeFileSync("example.txt", "Hello World")
// fs.writeFile("sample.txt", "Hello NodeJs", (err) => {
//     if (err) {
//         console.log(err);

//     }
// })


// Append
// fs.appendFileSync("example.txt", "\nHello World Again");
// fs.appendFile("sample.txt", "\nHello NodeJs Again", (err) => {
//     if (err) {
//         console.log(err);

//     }
// })


// Read Sync 
// let readDataSync = fs.readFileSync("example.txt","utf-8");
// console.log(readData);

// Read Async
// fs.readFile("example.txt","utf-8",(data,err)=>
//     {
//         if(data) console.log(data);
//         else console.log(err);  
//     })


// delete the file
// fs.unlinkSync("example.txt")


// copy of file
// fs.cpSync("sample.txt","copySample.txt");

//statistic of file when it was created
let statFile = fs.statSync("copySample.txt")
console.log(statFile);