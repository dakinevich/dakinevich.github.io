var header = document.querySelector(".section-header");

window.addEventListener("scroll", ()=>{
    header.style.backgroundPosition = "center "+(scrollY/2)+"px";
})
