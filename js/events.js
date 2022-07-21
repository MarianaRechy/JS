//!Eventos
/*
Podemos capturar y reaccionar a esos eventos,
manipularlos a nuestro favor.

//!Tipos de eventos
    Automaticos
    Generados por ususarios

//! Online events

const funEvent = () =>{
    console.log ("bbbbbbbb")
}

*/

//on error

document.getElementById("myImg").onerror = function() {myFunction()};

function myFunction() {
  document.getElementById("demo").innerHTML = "The image could not be loaded.";
}

//!EventListerner
// Es un metodo de los elementos del DOM

let btn = document.querySelector(".btn")

btn.addEventListener("click", funEvent) //no se pone el on porque no esta en linea

//! event handlers

//! event object
hace referencia al objeto que se crea cuando se captura un evento


