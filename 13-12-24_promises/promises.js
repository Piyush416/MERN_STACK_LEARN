// promises is a way to handle the asynchronus code in javascript

// promises is the object in the JavaScript


// promises has three stage
// 1. pending stage
// 2. fullfill/resolve stage
// 3. reject stage


// let promises = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {
//         console.log("Promises is resolve");
//     } else {
//         console.log("Promises is reject");
//     }
// })
// promises is in pending stage
// console.log(promises);



// use use resolve,reject the handle promises stage
// let promises = new Promise((resolve, reject) => {
//     let success = true;
//         if (success) {
//             resolve("Promises is resolve")
//         } else {
//             reject("Promises is reject")
//         }
//     })
// // promises is in resolve stage
// console.log(promises);



// if i want to do some task after resolve stage then we use then and catch keyword
// let promises = new Promise((resolve, reject) => {
//     let success = true;
//         if (success) {
//             resolve("Promises is resolve")
//         } else {
//             reject("Promises is reject")
//         }
//     })

// promises.then((message)=>
//     {
//         console.log(message);
//     }).catch((err)=>
//         {
//             console.log(err);

//         })




// multiples then -> promises chaining
let promises = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Promises is resolve")
    } else {
        reject("Promises is reject")
    }
})


promises.then((message) => {
    console.log("first Promise message: ", message);
    return "second promises resolve successfully";
}).then((mess) => {
    console.log("second Promise message: ", mess);
    return "third promises resolve successfully";
}).then((mess) => {
    console.log("third Promise message: ", mess);
}).catch((err) => {
    console.log(err);
})


