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

fetch('db.json')
.then(response=>response.json())
.then(data => data.menu)
.then(data => data.forEach(menu =>{
    new MenuCard (
        menu.img,
        menu.altimg,
        menu.title,
        menu.descr,
        menu.price
    ).render();
}));

