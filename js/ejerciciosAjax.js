
/*
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


*/

const getPosts = (url) => {
    let posts = [];
    const postRequest = new XMLHttpRequest();

    postRequest.onload = (data) => {
    
        if (data.target.readyState === 4)   {
            if (
                data.target.status >= 200 ||
                data.target.status <= 399 
                ){
                    posts = JSON.parse(data.target.response);                    
            }
            else if (data.target.status === 400)    {
                console.log('sucedio un error')
            }
        }     
    } 

    postRequest.open("GET", url, false);
    postRequest.send();
    return posts;
}



const printPosts = () =>{

  let posts = getPosts("https://rechy-kodemia-default-rtdb.firebaseio.com/post.json"); 
  console.log(posts)

  let template = "";


  for(let post in posts){
    console.log(post)
    template +=`
            <div class="col">
                <div class="card">
                    <img src="https://picsum.photos/200/80" class="card-img-top" alt="${posts[post].title}">
                    <div class="card-body">
                        <h5 class="card-title">${posts[post].titulo}</h5>
                        <p class="card-text">${posts[post].body}</p>  
                        <small>${posts[post].date}</small>
                        <a class="btn btn-primary btn-sm" href="/detail.html?postId=${post}">DETALLES
                        </a>               
                    </div>
                </div>
            </div>
          `;  
  }
return template;
}

let card = document.querySelector(".card_post")

card.innerHTML = printPosts()


/*
  
  posts.forEach(({title, body, tags}) => {
    
    let tagHTML = tags.reduce((html, tag) =>{
        html += `<span class="badge bg-primary me-2">${tag}</span>`;
        return html;
    }, "");

    template +=`
            <div class="col">
                <div class="card">
                    <img src="https://picsum.photos/200/80" class="card-img-top" alt="${title}">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${body}</p>  
                        ${tagHTML}                      
                    </div>
                </div>
            </div>
          `; 
  });
}

console.log("https://dummyjson.com/posts") */ 
