//forms 

const forms = document.querySelectorAll('form');

forms.forEach(item =>
    bindPostData(item)
);

//3 варианта отправки формы на server.php
//1)Отправка ОБЫЧНОЙ формы на сервер
// function bindPostData(form){
//     form.addEventListener('submit',(e)=>{
//         e.preventDefault(); 

//         const formData = new FormData(form);

//         fetch('server.php',{
//             method: "POST",
//             body: formData
//         }).then(data=>data.text())
//         .then(data=>{
//             console.log(data);
//         });
//     });
// }

//2) Отправка JSON формата формы на сервер. 
//Добавить строку в файле php
// function bindPostData(form){
//     form.addEventListener('submit',(e)=>{
//         e.preventDefault(); 

//         const formData = new FormData(form);

//         const object = {};
//         formData.forEach(function(value, key){
//             object[key] = value;
//         });
//         const json = JSON.stringify(object);
//         fetch('server.php',{
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: json
//         }).then(data=>data.text())
//         .then(data=>{
//             console.log(data);
//         });
//     });
// }

//3) Оптимизированный вариант преобразования formData в JSON формат 

// function bindPostData(form){
//     form.addEventListener('submit',(e)=>{
//         e.preventDefault(); 

//         const formData = new FormData(form);

//         const json = JSON.stringify(Object.fromEntries(formData.entries()));  

//         fetch('server.php',{
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: json
//         }).then(data=>data.text())
//         .then(data=>{
//             console.log(data);
//         });
//     });
// }

//4)Отправка формы на db.json.

//Cоздаем функцию postData, 

// const postData = async (url, data) => {
//     const res = await fetch(url,{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data
//     });
//     return await res.json();  
// };

// function bindPostData(form) {
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const formData = new FormData(form);

//         const json = JSON.stringify(Object.fromEntries(formData.entries()));

//         postData('db.json', json)
//         .then(dat => {
//             console.log(dat);
//         });
//     });
// }

//5)Отправка формы на db.json и внесение ее в базу 

// const postData = async (url, data) => {
//     const res = await fetch(url,{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data
//     });
//     return await res.json();  
// };

// function bindPostData(form) {
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const formData = new FormData(form);

//         const json = JSON.stringify(Object.fromEntries(formData.entries()));

//         postData('http://localhost:3000/requests', json)
//         .then(data => {
//             console.log(data);
//         });
//     });
// }
