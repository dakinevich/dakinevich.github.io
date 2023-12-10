document.addEventListener('DOMContentLoaded', function() {
    //alert("loaded");
}, false);



function chapter_click(e){
    document.querySelector(".btn-selected").classList.remove("btn-selected");
    e.classList.add("btn-selected");
}

function apparat_click(e, index){
    //alert(index);
    document.querySelector(".apparat-section").style.visibility = "visible";
}



