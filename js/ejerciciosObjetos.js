/*
Ejercicio 1 
Crea el objeto koder (con al menos 6 propiedades, al menos 1 debe ser otro objeto con 2 o 3 propiedades propias)
Luego imprimir en consola alguna oración que haga uso de algunas de esas propiedades, accedemos a ellas, incluida la del objeto anidado
Luego en otro console log, imprime todas las llaves dentro del objeto
Luego en otra console log, imprime todas los valores dentro del objeto
En otro console log imprime cuántos elementos tiene el objeto -> hint: utilizamos un contador
 


const koder= {
    Curso: "Fullstack",
    Generacion: "20",
    Perfil: { 
        Nombre: "Mariana",
        Edad: 31,
        Ciudad : "Guadalajara",
    },
    Objetivo: "Empleabilidad",
    MentorJs: "Ferdinand",
    MentorHtml: "Alfred",
    Equipo: "Globalpet",
};

console.log(`En este kodawars, contaremos con el equipo de Globalpet, entre los participantes se encuentra ${koder.Perfil.Nombre} desde ${koder.Perfil.Ciudad} Ella se encuentra concluyendo su curso de ${koder.Curso}`)

*/

/*

let llaves=""
for(llaves in koder){
    console.log(koder)
}

const contador= koder.reduce = ((cc, cv) => {
    return cc;
},0)

console.log(contador(koder))




Ejercicio 2.
Dado un objeto inicial, hacer los siguientes puntos

1. Agregar el lenguaje 'Go' a la lista de lenguajes
2. Agregar fastApi en frameworks
3. Cambiar el nivel a 4
4. Eliminar la propiedad avatar
5. Agregar una nueva propiedad de edad y poner el valor de 30
6. Imprimir en consola todos los lenguajes  y frameworks dominados
7. Clonar el objeto en uno nuevo
8. Imprimir en consola el nuevo objeto



let koder = {
   languages: ["JavaScript", "Python", "SQL"],
   frameworks: ["django", "node", "flask"],
   isMentor: true,
   level: 3,
   avatar: "https://picsum.photos/200/300"
}


const changes= (input) =>{
    koder.languages="go"
    koder.frameworks="fastApi"
    console.log(`${koder.level}=${koder.level +1}`)
    delete.koder.avatar;
    return koder;
}

*/

//! Tarea 15Jun
/**
* Dado un array de objetos koders
* Imprimir en consola, todos los nombres de cada koder
*
* Ferdinand Bracho tiene 30 años y es de la generación 2 y su primer modulo es python
* Jose Hernandez tiene 20 años y es de la generación0 20' y su primer modulo es nodeJs
* ....
*
*/
/**
* Del mismo array de koders
* Obtener la suma de todas las edades
*
*/

let koders =[
    {
        nombre: "Elizabeth",
        edad: 29,
        generacion:"22",
        modulo: "Maquetado",
    },
    {
        nombre: "Karen",
        edad: 35,
        generacion:"23",
        modulo: "fullStack",
    },
    {
        nombre: "Fernando",
        edad: 30,
        generacion:"31",
        modulo: "html",
    },
    {
        nombre: "Elvis",
        edad: 42,
        generacion:"1",
        modulo: "Phyton",
    }
];


koders.map((a)=>{
    console.log(`${a.nombre} tiene ${a.edad}, es de la generacion ${a.generacion} y su primer modulo es ${a.modulo}`)
});


let result = 0
koders.forEach((b, index, numbers)=>{
    result += b.edad;
    return result;
})

console.log(result);

/**
* Del objeto library (dado mas adelante)
* 1. Obtener el numero de libros que se estan leyendo
* 2. Obtener una lista de todos los autores
* 3. Obtener una lista de todos los Libros
*

let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
   ]


koders.map((b)=>{
    console.log(`${b.author}`)
    console.log(`${b.title}`)
})



   */
  