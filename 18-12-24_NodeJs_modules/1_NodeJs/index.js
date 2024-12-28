const importedFunc = require("./main.js")

// importedFunc this is function not we want to call
// console.log(importedFunc) 
// console.log(importedFunc.add)
// console.log(importedFunc.add())


//deconstruct the function -> means donot want to use importedFunc object name
// so we deconstruct the object
// const {addition} = importedFunc;


// now I can access addition function without importedFunc
// console.log(addition())


// shortcut
const {add} = importedFunc;
// console.log(importedFunc);
console.log(add())
// console.log(multi()) // error -> we not deconstruct the multiple function
console.log(importedFunc.multi()) // not give error




