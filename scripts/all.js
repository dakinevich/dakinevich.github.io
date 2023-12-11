function fill_html(){
    let cards = document.querySelector('.section-cards__cards');
    fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
        data.entities.forEach(item => {
            let card = document.createElement('li');
            card.className = 'section-cards__card';
            console.log('url("'+item.img+'")');
            card.style.backgroundImage = "url('"+item.img+"')";
            card.innerHTML = `
            <a href="/card.html?cardId=${item.id}" class="section-cards__card-content">
                <h3 class="section-cards__name">${item.name}</h3>
                <p class="section-cards__text">${item.info}</p>
            </a>
            `;
            cards.appendChild(card);
            });
    })
    .catch(error => console.error('Ошибка:', error));

    
}


document.addEventListener('DOMContentLoaded', function() {
    //alert("loaded");
    fill_html();
}, false);

