'use strict';



class MenuCard{
    constructor(img,altimg,title,descr,price){
        this.img=img;
        this.altimg=altimg;
        this.title=title;
        this.descr=descr;
        this.price=price;
    };
    render(){
        const elem = document.createElement('div');
        const par = document.querySelector('.menu__item_parent');
        elem.classList.add('menu__item');
        par.append(elem);
        elem.innerHTML = `
        <img src= ${this.img} alt=${this.altimg}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
        `;
    }
}

// создаем переменную, в нее помещаем колбек функцию с аргументом url. 
// Используем async и await. Внутри создаем переменную res в которую помещаем fetch с аргументом url.
// Возвращаем res.json.
//вызываем функцию getResourse (в качестве аргумента помещаем ссылку на нужный нам обьект)
//потом с помощью then обрабатываем инфу. 
//Нужно перебрать массив. 

const getResourse = async (url)=>{
    const res = await fetch(url);
    return await res.json();
};

getResourse(' http://localhost:3000/menu')
.then(data => {
        data.forEach(({img,altimg, title, descr, price}) =>{ 
        new MenuCard(img,altimg, title, descr, price).render();  
    });
});

//1. getResourse('http://localhost:3000/menu')
//2. return await res.json();
//3. data.forEach(({img,altimg, title, descr, price}) =>{ 
