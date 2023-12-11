var scroll_div = document.querySelector(".section-planets__cards");
function on_planet_click(e, planet_code){
    var parent = e.parentNode;

    var index = Array.prototype.indexOf.call(parent.children, e);

    scroll_div.style.transform = "translateX(-"+(e.offsetWidth*(index-1))+"px)";

    document.querySelector(".planet-selected").classList.remove("planet-selected");
    e.classList.add("planet-selected");
    clean_html();
    fill_html(planet_code);

}
function clean_html(){
    let m = document.querySelector(".section-cards__cards");
    m.innerHTML = "";

    
}
function fill_html(planet_code){
    let cards = document.querySelector('.section-cards__cards');
    fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
        data.entities.forEach(item => {
            let el_planet = item.planet;
            if(el_planet == planet_code){
                let card = document.createElement('li');
                card.className = 'section-cards__card';
                card.style.backgroundImage = "url('"+item.img+"')";
                card.innerHTML = `
                <a href="/card.html?cardId=${item.id}" class="section-cards__card-content">
                    <h3 class="section-cards__name">${item.name}</h3>
                    <p class="section-cards__text">${item.info}</p>
                </a>
                `;
                cards.appendChild(card);
            }


        });
    })
    .catch(error => console.error('Ошибка:', error));
}



document.addEventListener('DOMContentLoaded', function() {
    //alert("loaded");
    clean_html();
    fill_html("earth");
}, false);

