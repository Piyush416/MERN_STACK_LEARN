// Methods of DOM

    // select html element by id 
    // let para = document.getElementById("para")
    // console.log(para)

    // let allpara = document.querySelectorAll("#para")
    // console.log(allpara)

    // select html element by class 
    // let anchor = document.getElementsByClassName("anchor")
    // console.log(anchor)

    // for of loop use for access array element
    // for in loop use for access object
    // for(a in  anchor)
    // {
    //     console.log(a)
    // }

    // use # for id and . for class
    // let querySelector = document.querySelector("#parent")
    // console.log(querySelector)
    
    // let querySelectorAll = document.querySelectorAll("#para")
    // console.log(querySelectorAll)

// ---------------------------------------------------------------------------------

// properties of DOM

    // get the all the class element
    // let allpara = document.getElementsByClassName("para")
    // console.log(allpara) 

    // // get the particular class element content
    // let paraContent = document.getElementsByClassName("para")[1].innerHTML
    // console.log(paraContent)

    // // change the content of  particular class element by index
    // document.getElementsByClassName("para")[1].innerHTML = "This is footer" 

// ---------------------------------------------------------------------------------------

// styling the html element

    let header = document.getElementsByClassName("para")[1]
    header.innerHTML = "This is Footer"
    // header.style.backgroundColor = "grey"
    // header.style.color = "white"



    
    
// events
const obj = JSON.parse('{"id":"46s", "url": "https://cdn2.thecatapi.com/images/46s.jpg", "widhth":240 , "height":240}');

let images = [
    {
      "id": "3qm",
      "url": "https://cdn2.thecatapi.com/images/3qm.gif",
      "width": 500,
      "height": 281
    },
    {
      "id": "46s",
      "url": "https://cdn2.thecatapi.com/images/46s.jpg",
      "width": 640,
      "height": 429
    },
    {
      "id": "959",
      "url": "https://cdn2.thecatapi.com/images/959.jpg",
      "width": 550,
      "height": 825
    },
    {
      "id": "9vi",
      "url": "https://cdn2.thecatapi.com/images/9vi.jpg",
      "width": 960,
      "height": 720
    },
    {
      "id": "9vo",
      "url": "https://cdn2.thecatapi.com/images/9vo.jpg",
      "width": 960,
      "height": 1280
    },
    {
      "id": "a8i",
      "url": "https://cdn2.thecatapi.com/images/a8i.jpg",
      "width": 400,
      "height": 560
    },
    {
      "id": "ajs",
      "url": "https://cdn2.thecatapi.com/images/ajs.jpg",
      "width": 500,
      "height": 499
    },
    {
      "id": "alj",
      "url": "https://cdn2.thecatapi.com/images/alj.jpg",
      "width": 450,
      "height": 300
    },
    {
      "id": "b8e",
      "url": "https://cdn2.thecatapi.com/images/b8e.jpg",
      "width": 450,
      "height": 675
    },
    {
      "id": "bd0",
      "url": "https://cdn2.thecatapi.com/images/bd0.jpg",
      "width": 500,
      "height": 334
    },
    {
      "id": "vq",
      "url": "https://cdn2.thecatapi.com/images/vq.png",
      "width": 640,
      "height": 480
    },
    {
      "id": "38t",
      "url": "https://cdn2.thecatapi.com/images/38t.jpg",
      "width": 1024,
      "height": 683
    },
    {
      "id": "6kr",
      "url": "https://cdn2.thecatapi.com/images/6kr.jpg",
      "width": 500,
      "height": 336
    },
    {
      "id": "7bi",
      "url": "https://cdn2.thecatapi.com/images/7bi.jpg",
      "width": 415,
      "height": 521
    },
    {
      "id": "9d2",
      "url": "https://cdn2.thecatapi.com/images/9d2.jpg",
      "width": 500,
      "height": 651
    },
    {
      "id": "a6o",
      "url": "https://cdn2.thecatapi.com/images/a6o.jpg",
      "width": 512,
      "height": 434
    },
    {
      "id": "e46",
      "url": "https://cdn2.thecatapi.com/images/e46.jpg",
      "width": 600,
      "height": 430
    },
    {
      "id": "e4j",
      "url": "https://cdn2.thecatapi.com/images/e4j.jpg",
      "width": 1024,
      "height": 768
    },
    {
      "id": "VZ3qFLIe3",
      "url": "https://cdn2.thecatapi.com/images/VZ3qFLIe3.jpg",
      "width": 750,
      "height": 937
    },
    {
      "id": "qzmA6FAUs",
      "url": "https://cdn2.thecatapi.com/images/qzmA6FAUs.jpg",
      "width": 1800,
      "height": 947
    }
  ]

let button = document.getElementById("button")
let img = document.createElement("img")
img.classList.add("image")
let divImg = document.querySelector(".img")
divImg.appendChild(img)

// let img = document.getElementById("img")
button.addEventListener("click", fun1)

let count = 0;
function fun1()
{
        img.style.display = "visible"
        img.src = images[count].url
        img.width = obj.widhth
        img.height = obj.height
        button.classList.add("btn2")
        count+=1
        if(count == 10)
        {
            count = 0;
        }
}


