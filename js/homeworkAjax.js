
document.addEventListener('DOMContentLoaded', ()=>{
    inputTitlePost.value = ''
    inputBodyPost.value = ''
    inputDatePost.value = ''
})


let createBtn = document.querySelector('.btn_create_post')
let inputTitlePost = document.querySelector('.post_title_input')
let inputBodyPost = document.querySelector('.post_body_input')
let inputDatePost = document.querySelector('.post_date_input')

// Todo Create ajax function to create the post in firebase/post

createBtn.addEventListener('click' , (e)=>{
    e.preventDefault()
let change ={
    titulo: document.getElementById("titlePost").value,
    contenido:document.getElementById("contentPost").value,
    fecha:document.getElementById("fechaPost").value,

};

console.log(change)
createPost(change)
} )

const createPost = (newData)=>{
    const postRequest = new XMLHttpRequest(); 
    console.log("hola")
    postRequest.onload =(data)=>{
        if (
            data.target.status >= 200 ||
            data.target.status <= 399 
            ){
            console.log(data.target.responseText)
        }
        else if (data.target.status === 400)    {
            console.log('sucedio un error')
        }
        console.log(data.target.responseText)
    }
    postRequest.open("POST","https://rechy-kodemia-default-rtdb.firebaseio.com/post.json",false)

    postRequest.send(JSON.stringify(newData))
}


