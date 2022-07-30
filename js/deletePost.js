
const deletePost = (post, url ) => {
    const hRequest = new XMLHttpRequest()

    let deleteId;
    hRequest.onload = (e) => {
        newPostId = JSON.parse(e.target.responseText)
    }
    
    hRequest.open("DELETE", url , false)

    hRequest.send(JSON.stringify(post))

    return deleteId
}

let postTodelete = deletePost(url)
console.log(postTodelete)

let params = new URLSearchParams(window.location.search)
let postId = params.get('postId')

let url = `https://kodemia-g20-default-rtdb.firebaseio.com/posts/${postId}.json`


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
        <a class="btn btn-primary btn-sm" href="/editPost.html?postId=${postId}">Edit</a>
        <a class="btn btn-primary btn-sm d_button" href="/detail.html">Delete</a>
    </p>
    </div>
    </div>   
    `

    document.querySelector(".d_button").addEventListener(click,()=>{
        deletePost(url)
        window.location.ref =""
    })



})



