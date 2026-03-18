const curser = document.querySelector(".curser")

document.addEventListener("mousemove",function(e){
    curser.style.left = e.x + "px"
    curser.style.top = e.y + "px"
})


const curserblur = document.querySelector(".curserblur")

document.addEventListener("mousemove",function(e){
    curserblur.style.left = e.x  + -150 + "px"
    curserblur.style.top = e.y + -150 +  "px"
})





gsap.to("nav" , {
    backgroundColor : "#000",
    duration :0.5,
    height : "110px",
    scrollTrigger :{
        trigger: "nav",
        scroller : "body",
        // markers : true,
        start : "top -10%",
        end: "top -10%",
        scrub: 1
    }
})

gsap.to(".main", {
    backgroundColor : "black",
    scrollTrigger:{
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start:"top -20%",
        end : "top -70%",
        scrub: 2
    }
})