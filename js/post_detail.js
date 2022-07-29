// De alguna forma insertar id en url -> Done 
// De alguna forma leer el id del post del url  -> Done
//! Cargar la data del post al cargar la pagina 


// ? functionToGetData(url){
    // codigo 
// } 


let params = new URLSearchParams(window.location.search)
let postId = params.get('postId')

let url = `https://rechy-kodemia-default-rtdb.firebaseio.com/post/${postId}.json`

//! Hacer el request con el metdoo get del post selccionado y isertarla en mi template 

console.log(url)

let cardHolder = document.querySelector('.card_holder')

document.addEventListener("DOMContentLoaded", (e)=> {
    let result=getPosts(url)
    console.log(result)
    cardHolder.innerHTML = `
    <div class="card mb-3 mt-5 w-75">
    <img src="https://picsum.photos/1000" class="card-img-top mt-2" alt="img"  height="300"  width="500"  />
    <div class="card-body">
    <h5 class=>${result.titulo}</h5>
    <p class="card-text">
      ${result.body}
    </p>
    <p class="card-text">
        <small class="text-muted">Dummy date</small>
        ${result.date}
        <a class="btn btn-primary btn-sm" href="/detail.html">Edit</a>
        <a class="btn btn-primary btn-sm" href="/detail.html">Delete</a>
    </p>
    </div>
    </div>   
    `
})



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



