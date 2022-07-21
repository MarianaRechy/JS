
/*
DOM Document Objet Model
El texto lo transforma en un objeto, representacion de documento HTML, interpretado por js crea un objeto. 
Representa una interfaz.

//! Seleccionar elementos

let h1Titulo = document.getElementById("titulo")
console.log(h1Titulo)
Tag
getElementByName (Todos los elementos con ese TAG)
getElementByTagName (Todas las coincidencias)
getElementByClassName
Devuelve HTML Collection


Por clase, id y tag
querySelector(.h1Titulo) La primer coincidencia
querySelectorAll(#h1Titulo) Todas las coincidencias
Devuelve node List
Tiene forEach

//!Setear atributo (Agregar)
let parrafo =document.getElementById("titulo")
console.log(parrafo)
//Recibe el nombre y el valor del atributo"
titulo.setAttribute(hidden,true)

//!Obtener atributo
//getAtribute (<nombre,atributo)
parrafo.getAttribute("hidden")

//!Comprobar la existencia de atributos
//Demuestra lo tiene o no lo tiene? true o false
parrafo.hasAtribute("hiden")

//!Eliminar atributos
parrafo.attributes("hiden")

//! Crear elementos en el DOM

let list = document.createElement("ul")

//!Insertar elemento a otro elemento

let body = document.querySeelector("body")
body.appendChild(list
console.log(list)

//!Agregar texto

let item =document.createElement("li"
item.textContent= "Esto es un texto"
list.appendChild(item)
console.log(list)

seleccionamos el elemnto a interactuar
despues insertar

//! Insertar elemento antes que otro
let parent= document.querySelector(".parent")
let reference= document.querySelector(".reference")
let itemToInsert=document.createElement("p")
item.textContent="algooooo"

parent.insertBefore(reference, item)

console.log(parent)

console.log(parent)


/*

/**
* Practica
* 1. Agregar en nuestro index.html
*  1.1. Un elemento lista <ul></ul> o <ol></ol>
*  1.2 Agregar varios list items dentro de nuestra lista <li></li> con la clase "item"
* 2. Usando Javascript realizamos lo siguiente
*  2.1. A nuestro elemento list debemos agregarle la clase 'lista' y el id 'lista'
*  2.2. A todos los elementos de la lista debemos retirarle la clase "item"
*  2.3. A todos los elementos de la lista debemos agregar la clase  'list__item'

let unlineList = document.querySelector("ul")
let list = document.querySelectorAll("li")

unlineList.setAttribute("id","lista")
unlineList.setAttribute("class","lista")

list.forEach(change =>{
    change.removeAttribute("item")
    change.setAttribute("class","list__item")
})



Ejercicio 1 - Repicar este markup (HTML) usando JS
 
<ul id="menu" class="menu">
       <li class="item__menu">Home</li>
       <li class="item__menu">Products</li>
       <li class="item__menu">About Us</li>
</ul>

let unlineList=document.createElement("ul")
let body=document.querySelector("body")
body.appendChild(unlineList)

unlineList.setAttribute("id","menu2")
unlineList.setAttribute("class","menu")

for( let i = 0; i < 3; i++){
    let list2 = document.createElement("li")
    unlineList.appendChild(list2)
    list2.setAttribute("class","item__menu");
}



//TAREA
Dado un arreglo de koders
1. Generar una lista con la clase "koders"
2. Agregar a cada koder en esa lista
3. A todos los koders agregarles la clase "item koder"
let koders =  [
   {
       name: 'Ferdinand',
       lastName: 'Bracho',
       age: 30,
       generation: 2,
       modulos: ['js','python', 'git'],
   },
   {
       name: 'Alfredo',
       lastName: 'Pi',
       age: 20,
       generation: 10,
       modulos: ['Node', 'Cloud'],
   },
   {
       name: 'Ale',
       lastName: 'Pa',
       age: 30,
       generation: 1,
       modulos: ['React'],
   }
]


//! Otras propiedades de los elementos del DOM
//? textContent
//? innerText
//? inner HTML

let lista= document.querySelector(".lista")
console.log(lista)

let menuItems =["comidaChina", "Mexicana", "Venezonala"]

menuItems.forEach((texto)=>{
    lista.innerHTML += `<li class="items">${texto}</li>`
})




//! claslist
let lista = document.querySelector("ul")
// ? Agregamos una o mas clases (respetando las ya presentes)
lista.classList.add("otra","otramas")

// ? Nos ayuda a eliminar clases indicadas
lista.classList.remove("otramas")

//? Nos da un string con las clases
console.log(lista.classList.value)

//? Nos construye un iterable -> for of

let iteClass = lista.classList.values()
for(x of iteClas){
    console.log(x)
}
//? length
console.log(lista.classList.length)

//? 

NOTA FOR EACH LLEVA VARIABLE AFUERA PORQUE NO TIENE RETURN
REDUCE LLEVA LA VARIABLE AL PRINCIPIO DE LA Function
CADA TAG O TEXTO O COMENTARIO ES UN NODO
SOLO SON ELEMENTOS LOS TAGS HTML
LA DIFERECIA ESTA EN LA POSIBILIDAD DE SETEAR ATRIBUTOS-.

*/
