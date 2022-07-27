/*
Ejercicio 1
/! 1 Menejo de envento en el boton "show Card"
// Pasos
// 1. Seleccionar el holder de la card
// 2. seleccionar quien detona el evento
// 3. agregar un listener al detonador
// 4. insertar html al holder
// 5. Opcional insertar elemento en el card para eliminarla


let btn= document.getElementById("btn")
let cardHolder=document.querySelector(".second")

btn.addEventListener(click, (a) =>{
  cardHolder.innerHtml = 
   <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>;

});



Ejercicio 2
// !2 Manejo de envento en el input "inserte texto"
// pasos
// 1. Seleccionar el holder de la card
// 2. seleccionar quien detona el evento
// 3. agregar un listener al detonador
// 4. insertar html al holder cuando se detono el evento
// 5. Opcional insertar evento en boton "limpiar campo" para limpiar el input
21:22
Ejercicio 3
// ! 3 Mouse Events
// Pasos
// 1. Seleccionar el holder de la card
// 2. seleccionar quien detona el evento
// 3. agregar un listener al detonador
// 4. insertar html al holder cuando se detono el evento
// 5. De alguna forma limpiar el holder despues de algunos segundos. hint -> setTimeout



let addCard= document.getElementsByClassName("mouse_target")
let cardHolder=document.getElementsByClassName("second")
console.log(addCard[0])

addCard.addEventListener (click, (a) =>{
   click.innerHtml = <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
});



//!TAREA 21-07


//Declarar (y probar) una funcion que dado un string, nos filte los usaurios contenido en un array
//Buscar las coincidencias en los campos -> "name" "username" "email" 

let users = [
   {
     "id": 1,
     "name": "Brad Graham",
     "username": "Bret",
     "email": "Sincere@april.biz",
     "address": {
       "street": "Kulas Light",
       "suite": "Apt. 556",
       "city": "Gwenborough",
       "zipcode": "92998-3874",
       "geo": {
         "lat": "-37.3159",
         "lng": "81.1496"
       }
     },
     "phone": "1-770-736-8031 x56442",
     "website": "hildegard.org",
     "company": {
       "name": "Romaguera-Crona",
       "catchPhrase": "Multi-layered client-server neural-net",
       "bs": "harness real-time e-markets"
     }
   },
   {
     "id": 2,
     "name": "Brad fox",
     "username": "Bret",
     "email": "Sincere@april.biz",
     "address": {
       "street": "Kulas Light",
       "suite": "Apt. 556",
       "city": "Gwenborough",
       "zipcode": "92998-3874",
       "geo": {
         "lat": "-37.3159",
         "lng": "81.1496"
       }
     },
     "phone": "1-770-736-8031 x56442",
     "website": "hildegard.org",
     "company": {
       "name": "Romaguera-Crona",
       "catchPhrase": "Multi-layered client-server neural-net",
       "bs": "harness real-time e-markets"
     }
   },
   {
     "id": 3,
     "name": "Ervin Howell",
     "username": "Antonette",
     "email": "Shanna@melissa.tv",
     "address": {
       "street": "Victor Plains",
       "suite": "Suite 879",
       "city": "Wisokyburgh",
       "zipcode": "90566-7771",
       "geo": {
         "lat": "-43.9509",
         "lng": "-34.4618"
       }
     },
     "phone": "010-692-6593 x09125",
     "website": "anastasia.net",
     "company": {
       "name": "Deckow-Crist",
       "catchPhrase": "Proactive didactic contingency",
       "bs": "synergize scalable supply-chains"
     }
   },
   {
     "id": 4,
     "name": "Clementine Bauch",
     "username": "Samantha",
     "email": "Nathan@yesenia.net",
     "address": {
       "street": "Douglas Extension",
       "suite": "Suite 847",
       "city": "McKenziehaven",
       "zipcode": "59590-4157",
       "geo": {
         "lat": "-68.6102",
         "lng": "-47.0653"
       }
     },
     "phone": "1-463-123-4447",
     "website": "ramiro.info",
     "company": {
       "name": "Romaguera-Jacobson",
       "catchPhrase": "Face to face bifurcated interface",
       "bs": "e-enable strategic applications"
     }
   },
   {
     "id": 5,
     "name": "Patricia Lebsack",
     "username": "Karianne",
     "email": "Julianne.OConner@kory.org",
     "address": {
       "street": "Hoeger Mall",
       "suite": "Apt. 692",
       "city": "South Elvis",
       "zipcode": "53919-4257",
       "geo": {
         "lat": "29.4572",
         "lng": "-164.2990"
       }
     },
     "phone": "493-170-9623 x156",
     "website": "kale.biz",
     "company": {
       "name": "Robel-Corkery",
       "catchPhrase": "Multi-tiered zero tolerance productivity",
       "bs": "transition cutting-edge web services"
     }
   },
   {
     "id": 6,
     "name": "Patricia Jones",
     "username": "Karianne",
     "email": "Julianne.OConner@kory.org",
     "address": {
       "street": "Hoeger Mall",
       "suite": "Apt. 692",
       "city": "South Elvis",
       "zipcode": "53919-4257",
       "geo": {
         "lat": "29.4572",
         "lng": "-164.2990"
       }
     },
     "phone": "493-170-9623 x156",
     "website": "kale.biz",
     "company": {
       "name": "Robel-Corkery",
       "catchPhrase": "Multi-tiered zero tolerance productivity",
       "bs": "transition cutting-edge web services"
     }
   },
   {
     "id": 7,
     "name": "Chelsey Dietrich",
     "username": "Kamren",
     "email": "Lucio_Hettinger@annie.ca",
     "address": {
       "street": "Skiles Walks",
       "suite": "Suite 351",
       "city": "Roscoeview",
       "zipcode": "33263",
       "geo": {
         "lat": "-31.8129",
         "lng": "62.5342"
       }
     },
     "phone": "(254)954-1289",
     "website": "demarco.info",
     "company": {
       "name": "Keebler LLC",
       "catchPhrase": "User-centric fault-tolerant solution",
       "bs": "revolutionize end-to-end systems"
     }
   },
   {
     "id": 8,
     "name": "Mrs. Dennis Schulist",
     "username": "Leopoldo_Corkery",
     "email": "Karley_Dach@jasper.info",
     "address": {
       "street": "Norberto Crossing",
       "suite": "Apt. 950",
       "city": "South Christy",
       "zipcode": "23505-1337",
       "geo": {
         "lat": "-71.4197",
         "lng": "71.7478"
       }
     },
     "phone": "1-477-935-8478 x6430",
     "website": "ola.org",
     "company": {
       "name": "Considine-Lockman",
       "catchPhrase": "Synchronised bottom-line interface",
       "bs": "e-enable innovative applications"
     }
   },
   {
     "id": 9,
     "name": "Kurtis Weissnat",
     "username": "Isaac.Skiles",
     "email": "Telly.Hoeger@billy.biz",
     "address": {
       "street": "Rex Trail",
       "suite": "Suite 280",
       "city": "Howemouth",
       "zipcode": "58804-1099",
       "geo": {
         "lat": "24.8918",
         "lng": "21.8984"
       }
     },
     "phone": "210.067.6132",
     "website": "elvis.io",
     "company": {
       "name": "Johns Group",
       "catchPhrase": "Configurable multimedia task-force",
       "bs": "generate enterprise e-tailers"
     }
   },
   {
     "id": 10,
     "name": "Nicholas Runolfsdottir V",
     "username": "Maxime_Nienow",
     "email": "Sherwood@rosamond.me",
     "address": {
       "street": "Ellsworth Summit",
       "suite": "Suite 729",
       "city": "Aliyaview",
       "zipcode": "45169",
       "geo": {
         "lat": "-14.3990",
         "lng": "-120.7677"
       }
     },
     "phone": "586.493.6943 x140",
     "website": "jacynthe.com",
     "company": {
       "name": "Abernathy Group",
       "catchPhrase": "Implemented secondary concept",
       "bs": "e-enable extensible e-tailers"
     }
   },
   {
     "id": 11,
     "name": "Glenna Reichert",
     "username": "Delphine",
     "email": "Chaim_McDermott@dana.io",
     "address": {
       "street": "Dayna Park",
       "suite": "Suite 449",
       "city": "Bartholomebury",
       "zipcode": "76495-3109",
       "geo": {
         "lat": "24.6463",
         "lng": "-168.8889"
       }
     },
     "phone": "(775)976-6794 x41206",
     "website": "conrad.com",
     "company": {
       "name": "Yost and Sons",
       "catchPhrase": "Switchable contextually-based project",
       "bs": "aggregate real-time technologies"
     }
   },
   {
     "id": 12,
     "name": "Clementina DuBuque",
     "username": "Moriah.Stanton",
     "email": "Rey.Isaac@karina.biz",
     "address": {
       "street": "Kattie Turnpike",
       "suite": "Suite 198",
       "city": "Lebsackbury",
       "zipcode": "31428-2261",
       "geo": {
         "lat": "-38.2386",
         "lng": "57.2232"
       }
     },
     "phone": "024-648-3804",
     "website": "ambrose.net",
     "company": {
       "name": "Hoeger LLC",
       "catchPhrase": "Centralized empowering task-force",
       "bs": "target end-to-end models"
     }
   },
   {
     "id": 13,
     "name": "Jorge Camarillo",
     "username": "jorge.Camarillo",
     "email": "jorge.camarillo@kodemia.mx",
     "address": {
       "street": "Kattie Turnpike",
       "suite": "Suite 198",
       "city": "Lebsackbury",
       "zipcode": "31428-2261",
       "geo": {
         "lat": "-38.2386",
         "lng": "57.2232"
       }
     },
     "phone": "024-648-3804",
     "website": "ambrose.net",
     "company": {
       "name": "Hoeger LLC",
       "catchPhrase": "Centralized empowering task-force",
       "bs": "target end-to-end models"
     }
   },
   {
     "id": 14,
     "name": "Isaac luna",
     "username": "Isaac.luna",
     "email": "isaac.luna@gmail.com",
     "address": {
       "street": "Kattie Turnpike",
       "suite": "Suite 198",
       "city": "Lebsackbury",
       "zipcode": "31428-2261",
       "geo": {
         "lat": "-38.2386",
         "lng": "57.2232"
       }
     },
     "phone": "024-648-3804",
     "website": "ambrose.net",
     "company": {
       "name": "Hoeger LLC",
       "catchPhrase": "Centralized empowering task-force",
       "bs": "target end-to-end models"
     }
   }
 ]


  //let usuariosFinales = filterUsers("isa")
  //console.log (usuariosFinales)


// * Escuchar algun evento en el input y llamar a la funcion de filtrado cuando se detone
//* el evento en el boton "buscar" con el valor del mismo y hacerle console.log()

const filterUSers = (str) => {
  let strF = str.toLowerCase()
  let usuariosFiltrados = users.filter((user)=> {

      if(
          user.name.toLocaleLowerCase().match(strF) ||
          user.username.toLocaleLowerCase().match(strF) ||
          user.email.toLocaleLowerCase().match(strF)
          ) {
          return user
      }

  })

  return usuariosFiltrados
}
  
let infoUsers = document.querySelector(".input_text2")
let buscarUsuario= document.querySelector(".find_user")

infoUsers.addEventListener("input", ()=>{
  let texto= infoUsers.value
  let resultado=filterUSers(texto)
  console.log(resultado, texto)
  let result= insertUsers(resultado)
});



/*
// ? Tomando elemento input
let input = document.querySelector('.input_text')

// ? Tomando elemento boton "buscar"
let findButton = document.querySelector('.find_user')

// ? Agregando evento "click" al boton para ejecutar el filtrado cuando se detono el mismo
findButton.addEventListener('click', () =>{

    // ? Tomando el valor del input
   strToFilter = input.value

    // ? Ejecutando el filtrado
   result = filterUSers(strToFilter)

    Array.forEach

    filter 
    map 
    forEach 

    // ? Imprimiendo el resultado en consola 
   console.log(result)
})


// pasos 3.1 Capturar mi user holder
// por cada usuario renderizar una card

const insertUsers = (arr) => {
  
  let list = document.querySelector("#list_users")

  list.innerHTML = ""

  arr.forEach((user) => {

    list.innerHTML += `
    <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-1">${user.name}</p>
          <small>${user.username}</small>
        </a>
      </div> 
      `
  });
}

*/

