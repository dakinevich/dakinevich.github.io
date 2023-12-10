function on_date_header_click(e){
    var elements = e.parentNode.querySelectorAll(".section-timeline__element");
    var elements_array = [...elements];

    if (getComputedStyle(elements_array[0], null).display == 'none'){
        elements_array.forEach(elem => {
            elem.style.display='block';

        });
    
        var img = e.querySelector(".section-timeline__grup-element-img");
        img.style.transform = 'rotate(90deg)';
    }
    else{
        elements_array.forEach(elem => {
            elem.style.display='none';

        });
    
        var img = e.querySelector(".section-timeline__grup-element-img");
        img.style.transform = 'rotate(0)';
    }
    
    

}