var header = document.querySelector(".section-header");

window.addEventListener("scroll", ()=>{
    header.style.backgroundPosition = "center "+(scrollY/2)+"px";
    var height = document.querySelector(".section-header__list").getBoundingClientRect().top;
    // these are relative to the viewport, i.e. the window
    //console.log(height);
    
})
