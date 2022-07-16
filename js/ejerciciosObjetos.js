/*
Ejercicio 1 
Crea el objeto koder (con al menos 6 propiedades, al menos 1 debe ser otro objeto con 2 o 3 propiedades propias)
Luego imprimir en consola alguna oración que haga uso de algunas de esas propiedades, accedemos a ellas, incluida la del objeto anidado
Luego en otro console log, imprime todas las llaves dentro del objeto
Luego en otra console log, imprime todas los valores dentro del objeto
En otro console log imprime cuántos elementos tiene el objeto -> hint: utilizamos un contador
 
*/

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
