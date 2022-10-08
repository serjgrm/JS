// //1
// const xhr = new XMLHttpRequest();
// xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
// xhr.send();
// console.log(xhr.responseText);

// //2
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/postsы');
// xhr.send();
// xhr.addEventListener('load', () => {
//     console.log(xhr.responseText);
// });

// //3
// xhr.addEventListener('error', () => {
//     console.log('error');
// });

// //4
// function alo(cb) {
//     cb();
// }
// alo(() => {
//     console.log(1);
// });


//5

// function getPosts(cb) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
//     xhr.addEventListener('load', () => {
//         const response = JSON.parse(xhr.responseText);
//         cb(response); 
//     });
//     xhr.send();
// }
// getPosts((response)=>{
//     console.log(response);
// });


//6

const btn = document.querySelector('button');
const container = document.querySelector('.container');

function getPosts(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        cb(response); 
    });
    xhr.send();
}


function renderPosts(response){
    const fragment = document.createDocumentFragment();
        response.forEach(post => {

            const card = document.createElement('div');
            card.classList.add('card');

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');


            const title = document.createElement('h5');
            title.classList.add('card-title');
            title.textContent = post.title;
            cardBody.appendChild(title);


            const article = document.createElement('p');
            article.classList.add('card-text');
            article.textContent = post.body; 
            cardBody.appendChild(article);


            card.appendChild(cardBody);    
            fragment.appendChild(card);  

            console.log(cardBody);
        });
        container.appendChild(fragment);   

}

btn.addEventListener('click',()=>{
    getPosts(renderPosts);
});




/* 
1 - Поскольку процесс асинхронный. В консоль
выведеться пустая строка. 

2 - По этому, к обьекту xhr мы добавляем обработчик события 
с событием load/readystatechange

3 - Cпособ обработки ошибок. (ошибка в адрессе)
Если допустить ошибку в маршруте ссылки,
то событие load отработает и вернет пустой обьект,
потому что произошло общение с сервером.
Событие error отработает когда, общение с сервером не произошло.

4 - Вызов функции с колбеком в виде аргумента.

5 - Вывод в консоль инфу с сервера через call-back
функцию.

6 - Основываясь на инфе с сервера создаем карточки.






*/