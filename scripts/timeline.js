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

function fill_html(){
    let element = document.querySelector('.section-timeline .container');
    fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
        data.entities.forEach(item => {
            let year = parseInt(item.launchDate.split(".")[2]);
            let month = parseInt(item.launchDate.split(".")[1]);
            let day = parseInt(item.launchDate.split(".")[0]);
            let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
            month_s = months[month].toLowerCase();
            

            var children = element.children;
            for (var i = 0; i < children.length; i++) {
                var year_d = parseInt(children[i].querySelector(".section-timeline__grup-element-p").innerHTML);

                if (year-year_d <10 & year-year_d >= 0 ){
                    let div = document.createElement('div');
                    div.className = 'section-timeline__element';
                    div.classList.add("timeline-decor");
                    div.innerHTML = `
                    <p class="section-timeline__element-p">${year} год ${day} ${month_s}</p>
                        <a href="/card.html?cardId=${item.id}" class="section-timeline__element-content">
                            <div class="section-timeline__element-content-left">
                                <img class="section-timeline__element-content-img" src="${item.img}" alt="">
                            </div>
                            <div class="section-timeline__element-content-right">
                                <p class="section-timeline__element-name">${item.name}</p>
                                <p class="section-timeline__element-text">${item.info}</p>
                            </div>
                        </a>
                    `;
                    children[i].appendChild(div);
                }
            }
        });
    })
    .catch(error => console.error('Ошибка:', error));
}



document.addEventListener('DOMContentLoaded', function() {
    //alert("loaded");
    fill_html();
}, false);

