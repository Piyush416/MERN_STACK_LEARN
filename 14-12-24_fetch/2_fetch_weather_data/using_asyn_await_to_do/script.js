// go to weatherapi.com to get url

let leftbox = document.querySelector("#leftbox")
let subBtn = document.querySelector(".submit")
let city = document.querySelector("#name")



function myfun(data, cityName) {
    let temp_c = Math.round(data.current.temp_c)
    let condition = data.current.condition.text
    leftbox.innerHTML =
        `<h2>City Name: ${cityName.toUpperCase()}</h2>
                    <p>Weather Status: ${condition}</p>
                    <p>Temperature: ${temp_c}°C</p>
                    `
    return
}

subBtn.addEventListener("click", async () => {
    let cityName = city.value
    let url = `http://api.weatherapi.com/v1/current.json?key=e9d781001e9d4a1a93f53809241412&q=${cityName}`
    let rawData = await fetch(url)
    let data = await rawData.json()
    myfun(data, cityName)
})