const card = document.querySelector("#card");

async function getData() {
  let res = await fetch("http://localhost:8080/api/json");
  let data = await res.json();

  card.innerHTML = "";




// code for item render one by one in 100ms
  let item = data.map((i) => {
      return i;
  })
  
  index = 0;
  let length = item.length;
  // let stopMyTimer
  stopMyTimer = setInterval(() => {
      if (index < length) {
          card.innerHTML += `
          <div class="items">
          <img src="https://100k-faces.glitch.me/random-image" alt="John">
          <h1>${item[index].fname} ${item[index].lname}</h1>
          <p class="title">${item[index].profession}</p>
          <p>${item[index].uname}</p>
          <div style="margin: 5px 0">
            <a href="#"><i class="fa fa-dribbble"></i></a> 
            <a href="#"><i class="fa fa-twitter"></i></a>  
            <a href="#"><i class="fa fa-linkedin"></i></a>  
            <a href="#"><i class="fa fa-facebook"></i></a> 
          </div>
          <button>Contact</button>
          </div>
              `;
          index++;
      }
      else {
          clearInterval(stopMyTimer)
      }
  }, 100)




// without timer to render the card
  // data.forEach(item => {
  //   card.innerHTML += `
  //       <div class="items">
  //       <img src="https://100k-faces.glitch.me/random-image" alt="John">
  //       <h1>${item.fname} ${item.lname}</h1>
  //       <p class="title">${item.profession}</p>
  //       <p>${item.uname}</p>
  //       <div style="margin: 5px 0">
  //         <a href="#"><i class="fa fa-dribbble"></i></a> 
  //         <a href="#"><i class="fa fa-twitter"></i></a>  
  //         <a href="#"><i class="fa fa-linkedin"></i></a>  
  //         <a href="#"><i class="fa fa-facebook"></i></a> 
  //       </div>
  //       <button>Contact</button>
  //       </div>
  //       `
  // });

}

getData();
