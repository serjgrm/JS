'use strict';

class Menucard {
    constructor(img,title,price){
        this.img=img;
        this.title=title;
        this.price=price;
    }
    render(){
        const elem = document.createElement('div');
        elem.classList.add('menu__item');
        elem.innerHTML=`
                <img src=${this.img}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr"></div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
        `;
        const par = document.querySelector('.menu__item_parent');
        par.append(elem);
    }
}


fetch('db.json')
.then(response => response.json())
.then(data => data.menu)
.then(menu => 
    menu.forEach(obj=>
        new Menucard (
            obj.img,
            obj.title,
            obj.price
        ).render()
        ));


