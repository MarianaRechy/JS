//Tarea 19.07
/*
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

//! TERMINAR ESTE EJECICIO (PENDIENTE)

let unlineList=document.createElement("ul")
let body=document.querySelector("body")
body.appendChild(unlineList)

unlineList.setAttribute("class","koders")


for( let i = 0; i < 3; i++){
    let list2 = document.createElement("li")
    unlineList.appendChild(list2)
    let array = koders.name
    list2.appendChild(array)
    list2.setAttribute("class","item__koder");
}



//Practica
//Funcion que reciba como parametro un array de post y que pinte esos post
//Refencia -> https://getbootstrap.com/docs/5.2/components/list-group/#custom-content

let posts = [
 {
   userId: 1,
   id: 1,
   title:
     "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
   body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
 },
 {
   userId: 1,
   id: 2,
   title: "qui est esse",
   body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
 },
 {
   userId: 1,
   id: 3,
   title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
   body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
 },
 {
   userId: 1,
   id: 4,
   title: "eum et est occaecati",
   body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
 },
 {
   userId: 1,
   id: 5,
   title: "nesciunt quas odio",
   body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
 },
 {
   userId: 1,
   id: 6,
   title: "dolorem eum magni eos aperiam quia",
   body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
 },
 {
   userId: 1,
   id: 7,
   title: "magnam facilis autem",
   body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
 },
 {
   userId: 1,
   id: 8,
   title: "dolorem dolore est ipsam",
   body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
 },
 {
   userId: 1,
   id: 9,
   title: "nesciunt iure omnis dolorem tempora et accusantium",
   body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
 },
 {
   userId: 1,
   id: 10,
   title: "optio molestias id quia eum",
   body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
 },
 {
   userId: 2,
   id: 11,
   title: "et ea vero quia laudantium autem",
   body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
 },
 {
   userId: 2,
   id: 12,
   title: "in quibusdam tempore odit est dolorem",
   body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
 },
 {
   userId: 2,
   id: 13,
   title: "dolorum ut in voluptas mollitia et saepe quo animi",
   body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
 },
 {
   userId: 2,
   id: 14,
   title: "voluptatem eligendi optio",
   body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
 },
 {
   userId: 2,
   id: 15,
   title: "eveniet quod temporibus",
   body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
 },
 {
   userId: 2,
   id: 16,
   title:
     "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
   body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
 }
];



//Referencia
/*
<div class="list-group">
<a href="#" class="list-group-item list-group-item-action active" aria-current="true">
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">List group item heading</h5>
    <small>3 days ago</small>
  </div>
  <p class="mb-1">Some placeholder content in a paragraph.</p>
  <small>And some small print.</small>
</a>

/ ? resolucion con forEach
// let template = ''
// albumes.forEach((album) => {
//     template += `
//     <div class="col">
//          <div class="card">
//            <img src="${album.url}" class="card-img-top" alt="..." />
//            <div class="card-body">
//              <h5 class="card-title">${album.id}</h5>
//              <p class="card-text">
//                ${album.title}
//              </p>
//            </div>
//          </div>
//         </div>
//     `
// })


// console.log(template)

// album.innerHTML = template




let ciclo=""; 
posts.forEach((post) => {
  ciclo +=
  `<a href="#" class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${post.title}</h5>
      <small>${post.userId}</small>
      <small>${post.id}</small>
    </div>
    <p class="mb-1">${post.body}</p>
    <small>${post.mensaje}</small>
  </a>
  `
})
let factor = document.querySelector("#posting")
factor.innerHTML = ciclo
// posting.firstChild.textContent="prueba"

*/


