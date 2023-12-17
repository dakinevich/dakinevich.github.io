document.addEventListener('DOMContentLoaded', function() {
    var url = new URL(window.location);
    var cur_id = url.searchParams.get("cardId");
    var element = this.querySelector(".apparat-section .container")

    fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
        data.entities.forEach(item => {
            if(item.id == cur_id){
                this.querySelector(".apparat-section__header-h").innerHTML = item.name;
        
                let img = document.createElement('img');
                img.className = 'apparat-section__title-img';
                img.src = item.img;
                element.appendChild(img)

                let p = document.createElement('p');
                p.className = 'apparat-section__title-p';
                p.innerHTML = item.info;
                element.appendChild(p)
                for(var i in item.article){
                    if (item.article[i].img){
                        let img = document.createElement('img');
                        img.className = 'apparat-section__article-img';
                        img.src = item.article[i].img;
                        element.appendChild(img)

                    }
                    if (item.article[i].text){
                        let p = document.createElement('p');
                        p.className = 'apparat-section__article-p';
                        p.innerHTML = item.article[i].text;
                        element.appendChild(p)

                    }

                }

            }


        });
    })
    .catch(error => console.error('Ошибка:', error));

}, false);


function exit_apparat(e){
    history.back()
}
