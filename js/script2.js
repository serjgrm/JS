const btn = document.querySelector('.btn-get-posts');

const btnAddPost = document.querySelector('.btn-add-posts');
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


function createPost(body, cb){
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        cb(response); 
    });


    xhr.send(JSON.stringify(body));
}

// function renderPosts(response){
//     const fragment = document.createDocumentFragment();
//         response.forEach(post => {

//             const card = document.createElement('div');
//             card.classList.add('card');

//             const cardBody = document.createElement('div');
//             cardBody.classList.add('card-body');


//             const title = document.createElement('h5');
//             title.classList.add('card-title');
//             title.textContent = post.title;
//             cardBody.appendChild(title);


//             const article = document.createElement('p');
//             article.classList.add('card-text');
//             article.textContent = post.body; 
//             cardBody.appendChild(article);


//             card.appendChild(cardBody);    
//             fragment.appendChild(card);  

//             console.log(cardBody);
//         });
//         container.appendChild(fragment);   

// }

btn.addEventListener('click',()=>{
    getPosts(renderPosts);
});


btnAddPost.addEventListener('click',(e)=>{
    const newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1,
      };
    createPost(newPost,response =>{
        console.log(response);
    });
});