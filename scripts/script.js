document.addEventListener('DOMContentLoaded', function() {
    //alert("loaded");
}, false);


var header = document.querySelector(".section-header");
var h = document.querySelector(".section-header__h");
var p = document.querySelector(".header__p");

window.addEventListener("scroll", ()=>{
    header.style.backgroundPosition = "center "+(scrollY/3)+"px";
    var height = h.getBoundingClientRect().top;
    // these are relative to the viewport, i.e. the window
    console.log(height);
    /*if (height < -50){
        p.style.transform =  "translate(0,0)";
    }
    else{
        p.style.transform = "translate(0,70px)";
    }*/
})


