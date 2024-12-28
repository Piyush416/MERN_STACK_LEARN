// we use fixer.io website to get url
let url = "https://data.fixer.io/api/latest?access_key=64f1b357787b0ce4cc4fc2cac4bba6b7"

let select = document.querySelector("#select")
let option = document.getElementsByClassName("items")
let inrbtn = document.getElementById("inrbtn")
let usdbtn = document.getElementById("usdbtn")
let usdinput = document.getElementById("usdval")
let inrinput = document.getElementById("inrval")


function ratio(data) {
    let rates = data.rates
    var keyname = Object.keys(rates)
    for (let index = 0; index < keyname.length; index++) {
        const classname = keyname[index];
        let option = document.createElement("option")
        option.classList.add("items")
        option.textContent = classname
        select.appendChild(option)
    }

    select.addEventListener("change", (event) => {
        var value = event.target.value
        console.log(value)
        var selectValue = rates[value]
        console.log(selectValue)
        usdbtn.addEventListener("click", () => {
            let inputval = usdinput.value
            let inputApiVal = rates['USD']
            let fraction = selectValue / inputApiVal
            let ans = fraction * inputval
            let answer = document.getElementById("answer")
            answer.innerHTML =
                `<p>${inputval}USD is  ${ans}${value}</p>`
        })

        inrbtn.addEventListener("click", () => {
            let inputval = inrinput.value
            let inputApiVal = rates['INR']
            let fraction = selectValue / inputApiVal
            let ans = fraction * inputval
            let answer = document.getElementById("answer")
            answer.innerHTML =
                `<p>${inputval}USD is  ${ans}${value}</p>`
        })
    })
}


fetch(url).then((rawData) => {
    return rawData.json()
}).then((data) => {
    ratio(data)
})




