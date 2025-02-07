let show=true
setInterval(()=>{
    show=!show
    document.querySelector("#group1").classList.toggle("hidden");
    document.querySelector("#group4").classList.toggle("hidden");
},2000)
