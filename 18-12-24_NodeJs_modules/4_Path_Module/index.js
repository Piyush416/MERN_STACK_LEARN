const path = require("path")

const myPath = "C:/Users/piyus/Desktop/sem6_data/mern_stack/18-12-24_NodeJs/4_Path_Module/index.js"

// const parsedPath = path.parse(myPath);
// print the object
// console.log(parsedPath);


// deconstruct the parse functoion 
// let {parse} = path;
// const parsedPath = parse(myPath);
// console.log(parsedPath);



// **************Note
// for path we always use relative path not static path
console.log(__dirname);


let newPath = path.join(__dirname, "src/example.json");
console.log(newPath);


