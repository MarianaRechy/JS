
const getData = (url) => {
    const httpRequest = new XMLHttpRequest();

    let result = [];
    httpRequest.onload = (e) => {
        result = JSON.parse(e.target.responseText);
    };
    httpRequest.open("GET", url, false);
    httpRequest.send();

    return result;
};

let postToRender = getData("https://dummyjson.com/posts")

postToRender = postToRender.posts

//! Seleecionar elemento holder
let data = document.querySelector(".card_post")

//! Construir e insertar mi template

const insertPost = (posts) => {

    let template = posts.reduce((acc, post) => {
        acc +=`
            <div class="card">
                <h5 class="card-header">Featured</h5>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">${post.body}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `
    },"");

insertPost.innerHTML = template
}



//! Escuchar un evento para cargar data

document.addEventListener(("DOMContentLoaded"),() => {
    insertPost(postToRender)
});

