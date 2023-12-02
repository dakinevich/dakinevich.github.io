document.addEventListener('DOMContentLoaded', function() {
    //alert("loaded");
}, false);


var header = document.querySelector(".section-header");
var p = document.querySelector(".header__p");
var chapter = document.querySelector(".btn-selected").innerText;

window.addEventListener("scroll", ()=>{
    header.style.backgroundPosition = "center "+(scrollY/2)+"px";
    var height = document.querySelector(".section-header__list").getBoundingClientRect().top;
    // these are relative to the viewport, i.e. the window
    console.log(height);
    if (height < -0){
        p.style.transform =  "translate(0,0)";
        p.innerText = document.querySelector(".btn-selected").innerText;
    }
    else{
        //p.style.transform = "translate(0,70px)";
        p.innerText = "Кто прочел тот осел";
    }
})

function chapter_click(e){
    document.querySelector(".btn-selected").classList.remove("btn-selected");
    e.classList.add("btn-selected");
}

function apparat_click(e, index){
    //alert(index);
    document.querySelector(".apparat-section").style.visibility = "visible";
}


function exit_apparat(e){
    //alert(index);
    document.querySelector(".apparat-section").style.visibility = "";
}

