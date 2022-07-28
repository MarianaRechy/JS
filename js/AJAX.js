//! AJAX

//Asynchronous JavaScritp and XML

//!Arquitecturas
// ! Monolita
// ! Cliente - servidor

// ! CRUD

// ! C -> create
// ! R -> Read : list - details
// ! U -> Update : Global - Parcial
// ! D -> Delete

// ! XMLHttpRequest
//! Paso a paso para su uso
//! 
//! Instanciamos nuestro objeto
//!Definir un cañllbck en nuestro evento onload

/*
const xmlRe =

const xRe= new XMLHttpRequest()
console.log(xRe)

//"instancear" crear una copia, tranferir informacion y desecharla, crear replicas a partir de un molde

//*Propiedades

readyState Escuchar los cambios y tomar deciciones a parti de ahí

0 request not initialized
1 server conetion 
2
3
4

//status 

//! JSON
{}
key: value

texto plano ligero
Enviar informacion 
Para enviar request
JSON.paser(json)



JSON parse       Tranforma a objeto
JSON.stringify  de objetos a jason 
Para leer response
Jason.stringify(Objeto)


//!Definir un cañllbck en nuestro evento onload
Una vez qu este cargado el request onloa ejecuta

xRe.onload = () => {
    console.log(data.target)
}

//! Abrir y setear nuestra peticion
metodo open
xRe.open(<Direccion http>,</Direccion objetivo>)

metodo http-verbos http

GET READ 
post CREATE
PUT  UPDATE : GLOBAL
PATCH  UPDATE: PARCIAL
DELETE



xRe.open("GET", "README.md")
console.log(xRe)

//! Enviar nuestra peticion
Metodo de send
xRe.SEND()


// ! Paso a paso para su uso 
    // ? Instanciamos nuestro objeto
    const xRe = new XMLHttpRequest()
    // console.log(xRe)

    // ? Definir un callback en nuestro evento onload 
    xRe.onload = (data) => {
        console.log(data)
        if (data.target.readyState === 4)   {
            if (
                data.target.status >= 200 ||
                data.target.status <= 399 
                ){
                console.log(data.target.responseText)
            }
            else if (data.target.status === 400)    {
                console.log('sucedio un error')
            }
        }
    } 

    //? Abrir y setear nuestra peticion 
    //? request.open(<Metodo htto>, <Direccion objetivo>)

    xRe.open("GET", "https://dummyjson.com/carts", false)
    // console.log(xRe)

    //? Enviar nuestra peticion 
    xRe.send() 


    //! crear un usuario con ajax

    const createUser = (user) =>{
        const httpRequest = new XMLHttpRequest()

        httpRequest.onload =(e) => {
            console.log(e.target.responseText)
        }

        httpRequest.open("POST","https://rechy-kodemia-default-rtdb.firebaseio.com/.json",false)
        let userJson = JSON.stringify(user)
        httpRequest.send(userJson)
    }


const userToCreate = {
    firstname: "Mariana",
    lastname: "Rechy"
}

console.log(userToCreate);



// ! Crear un usario con AJAX 

const createUser = (user) => {
    const httRequest = new XMLHttpRequest()

    httRequest.onload = (e) => {
        console.log(e.target.responseText)
    }

    httRequest.open("POST",'https://kodemia-g20-default-rtdb.firebaseio.com/koders.json', false)

    let userJson = JSON.stringify(user)

    httRequest.send(userJson)
}


const userToCreate = {
    firstName: "Mariana",
    lastName: "Rechy"
}

createUser(userToCreate)
console.log("aloooo")




//! Practica de clase

//En su propio BD 
//Crear uns subdirectorio llamada "post" 
//Y este crear al menos 10 post 
//con la siguiente estructura -> titulo - Body - date


const createPost = (post) => {
    const httRequest = new XMLHttpRequest()

    httRequest.onload = (e) => {
        console.log(e.target.responseText)
    }

    httRequest.open("POST",'https://rechy-kodemia-default-rtdb.firebaseio.com/post.json', false)

    let postJson = JSON.stringify(post)

    httRequest.send(postJson)
}


const post = {
    titulo: "New data",
    body: "Soy un body",
    date: " 07/27/2022"
}


createPost(post)



//! Update Data -> PUT

const updateData = (data) =>{
    const httRequest = new XMLHttpRequest ()

    httRequest.onload= (e)=>{
        console.log(e.target.responseText)
    }
    httRequest.responseXML("PUT", "https://rechy-kodemia-default-rtdb.firebaseio.com/", false)

    httRequest.send.apply(JSON.stringify(data))
}

const newData ={
    firstName: "Ferdinand",
    lastName: "Bracho"
}

updateData(newData)



*/
