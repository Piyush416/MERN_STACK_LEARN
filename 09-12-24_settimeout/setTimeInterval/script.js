let para = document.querySelector("#para")
let start = document.querySelector(".start")
let stop = document.querySelector(".stop")
let reset = document.querySelector(".reset")
let cngcolor = document.querySelector(".CngColor")
let input = document.getElementById("input")
let leftbox = document.getElementById("leftbox")

let value

cngcolor.addEventListener("click",()=>
{
    value = input.value
    leftbox.style.backgroundColor = value

})


let increment = 1
let count = 0


let startTime

start.addEventListener('click', ()=>
    {
        count+=1
        if(count == 1)
        {
                startTime = setInterval(() => {
                para.textContent = "Timer : "+increment
                increment++
            }, 1000);
        }
       
        
    })

stop.addEventListener('click', ()=>
    {
        clearInterval(startTime)
    })

reset.addEventListener('click',()=>
    {
        para.textContent = "Timer : "
        increment = 1
        count = 0
        clearInterval(startTime)
    })

