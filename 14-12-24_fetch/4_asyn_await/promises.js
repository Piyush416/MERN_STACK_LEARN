// async await it is the way to exceute the asynchronus code into synchronums code

// await -> first of all retrieve all the data and then go to next line
// network calling is --> async (fetch(url))
//  parse json is also async 
//  so we use await to tell the program the first complete execution and then execute the next line



// old way to write promises
// function getData()
// {
//     fetch("https://jsonplaceholder.typicode.com/users").then((rawData)=>{
//         return rawData.json()
//     }).then((data)=>
//         {
//             console.log(data);
//         }).catch((error)=>
//             {
//                 console.log(error);

//             })
// }

// getData()




// new way to write promises
// use async keyword to nearest function
// use await keyword in only async function
// async function getData()
// {
//     let rawData = await fetch("https://jsonplaceholder.typicode.com/users")
//     let response = await rawData.json();
//     console.log(response)
// }

// getData()


// for error we use try catch 
// async function getData() {
//     try {
//         let rawData = await fetch("https://jsonplaceholder.typicode.com/users")
//             let response = await rawData.json();
//             console.log(response)
//     } catch (error) {
//         console.log("You encountered an error: ",error);
        
//     }
// }

// getData()



// async function will return promises
async function getData() {
    return 12345456;
}

console.log(getData());