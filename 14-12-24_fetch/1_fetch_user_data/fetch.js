// fetch() method

// it is use to fetch the api 
// when we fetch api we get pending promises
// .then method is use to resolve return the response object
// so we parse the response object to javascript object
// after the first promises have to return the pending promises 
// again use then method to print the data


// jsonplaceholder website to get url
// let url = "https://jsonplaceholder.typicode.com/posts"

// let data = fetch(url)
// console.log(data) // print the pending promises

// so to handle the promise we use then method

// fetch(url).then((rawData) => {
//     // console.log(rawData)  // this will print the respond object
//     // then after we convert this respond object to JSON so we use .json but
//     // .json() will also give pending promises so we again use .then()
//     return (rawData.json())
// }).then((data) => {
//     console.log(data)  // this will print the javascript object or fetch the api
// })



// task 1
// fetch the api and display it

let userUrl = "https://jsonplaceholder.typicode.com/users";

let container = document.querySelector(".container");
let leftbox = document.getElementById("leftbox")
let table = document.createElement("table")
function myfunc(data) {
    let count = 0
    data.forEach(i => {
        count++
        let id = i.id
        let name = i.name
        if (id != "" && name != "") {
            if (count == 1) {
                let th = document.createElement("th")
                let th1 = document.createElement("th")
                let th2 = document.createElement("th")
                th.textContent = "ID"
                th1.textContent = "NAME"
                th2.textContent = "EMAIL"
                let tr = document.createElement("tr")
                tr.appendChild(th)
                tr.appendChild(th1)
                tr.appendChild(th2)
                table.appendChild(tr)

                let tr1 = document.createElement("tr")
                let td = document.createElement("td")
                let td1 = document.createElement("td")
                let td2 = document.createElement("td")
                td.textContent = i.id
                td1.textContent = i.name
                td2.textContent = i.email
                tr1.appendChild(td)
                tr1.appendChild(td1)
                tr1.appendChild(td2)
                table.appendChild(tr1)
                leftbox.appendChild(table)
            }
            else {
                let tr1 = document.createElement("tr")
                let td = document.createElement("td")
                let td1 = document.createElement("td")
                let td2 = document.createElement("td")
                td.textContent = i.id
                td1.textContent = i.name
                td2.textContent = i.email
                tr1.appendChild(td)
                tr1.appendChild(td1)
                tr1.appendChild(td2)
                table.appendChild(tr1)
                leftbox.appendChild(table)
            }
        }
    })
};


let userData = fetch(userUrl).then((rawData) => {
    return (rawData.json());
}).then((data) => {
    return myfunc(data);
}).catch((error) => {
    console.log(error);

})
