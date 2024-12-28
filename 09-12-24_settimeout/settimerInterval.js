let increment = 1;

let stopMyTimer
stopMyTimer = setInterval(()=>
    {
        if(increment <= 10)
        {
            console.log(increment);
            increment++;
        }
        else
        {
            clearInterval(stopMyTimer)
        }
    },1000)
