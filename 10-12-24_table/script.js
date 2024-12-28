let para = document.querySelector("#para")
let btn = document.querySelector(".submit")
let name = document.getElementById("name")
let leftbox = document.getElementById("leftbox")

let batch = document.getElementById("batch")

let table = document.createElement("table")

let count = 0

btn.addEventListener("click", () => {

    count++
    let nameV = name.value
    let batchV = batch.value
    if (nameV != "" && batchV != "") {
        if (count == 1) {
            let th = document.createElement("th")
            let th1 = document.createElement("th")
            th.textContent = "Name"
            th1.textContent = "Batch"
            let tr = document.createElement("tr")
            tr.appendChild(th)
            tr.appendChild(th1)
            table.appendChild(tr)
            
            let tr1 = document.createElement("tr")
            let td = document.createElement("td")
            let td1 = document.createElement("td")
            td.textContent = nameV
            td1.textContent = batchV
            tr1.appendChild(td)
            tr1.appendChild(td1)
            table.appendChild(tr1)  

            leftbox.appendChild(table)
        }
        else {
            let tr = document.createElement("tr")
            let td = document.createElement("td")
            let td1 = document.createElement("td")
            td.textContent = nameV
            td1.textContent = batchV
            tr.appendChild(td)
            tr.appendChild(td1)
            table.appendChild(tr)
        }
    }
})


