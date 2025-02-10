const slider1 = document.querySelector(".sliderFirst")
const slider2 = document.querySelector(".sliderSecond")

let show=true
setInterval(()=>{
    show=!  show
    show ? slider1.style.transform = "translateX(-100%)" :  slider1.style.transform = "translateX(0%)"
    show ? slider2.style.transform = "translateX(-100%)" :  slider2.style.transform = "translateX(0%)"
},2000)
