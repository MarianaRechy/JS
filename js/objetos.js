/*
Objetos - Colecciones de elementos
(key calue paairs)
una entidad => objetos
Que tiene caracteristicas, propiedades
Lleva a cabo acciones -> metodos

first_name: "ferdinand";

const coche = {
    color: "",
    maxSpeed : ""
}

//!Los objetos en js colecciones de datos en una sola variable

let academia = {
    nombre:"kodemia",
    numeroEstdiantes: 80,
    areaEstudio: "programacion"
    numeroProfesores: 20,
    materia: [
        "html"
        "linux"
        "JavaScript"
    ],
    materiaProfesor : {
        html: "Alfredo",
        backend : "Ale",
        talleres{
            linux: "Alfred",
            git : "Ferdinand",
        }
    }
    );

    //! Acceder a propiedades
    !Bracket notation 
    ! -> []
    Objeto[propiedad]

    console.log(academia["nombre"]);

    console.log(academia["materiaProfesor"]["html"]);

    let academiaNombre = "nombre";

    console.log(academia[academiaNombre]);

    !Dot notation
    !->
    objeto.propiedad
    console.log(academia.nombre);
    if (academia.classesOnline){
        console.log("Puede estudiar de donde sea");
    }

PRACTICA EN CLASE
const player = {
 score: 88888,
 level: 7,
 lives: 2,
 vitalEnergy: 1,
 isAlive: true,
};
 
console.log(jugador);


//Dado el siguiente lleva a cabo las las operaciones indicadas

const player = {
 score: 88888,
 level: 7,
 lives: 2,
 vitalEnergy: 1,
 isAlive: true,
};
 
//console.log(jugador);
 
// ! 1 Jugador recibe un golpe crítico que le resta 25 puntos de energía vital "vital Energy"
// Realizar código para llevar a cabo las operaciones

console.log(player.vitalEnergy-25)
 
// ! 2 Si la energía vital del jugador es menor a 0 pasado "isAlive" = false
// Realizar código para llevar a cabo las operaciones

if(player[vitalEnergy]<=0){
    player[isAlive] = false
    console.log(player[isAlive])
}else{
    console.log("Esta vivo")
}

// ! 3 Revisamos nuestro jugador
// Realizar código para llevar a cabo las operaciones
 
 




 
// ! 4  Si No está vivo pero tienen más vidas entonces -> Puntaje = 0, Vida -1, nivel = 0, energia vital = 100
// Realizar código para llevar a cabo las operaciones

if(player[isAlive]= false && player[lives]>0){
    player.score=0,
    player.lives=-1,
    player.level= player.lives -1,
    player.vitalEnergy=100,
    player.isAlive= true,
}
console.log(player)

//!Agregar nuevas propiedades

const koder = {
    firstName: "Luis",
    lastName: "Rdz",

koder["lastName"]= 25;

koder.modules ={};
koder.modules.html = true;

//! Eliminar propiedads de objeto

delete.koder.modules;

//! Iterar sobre objetos
for (x in koder){
    console.log(x);
}

for(propiedad in koder){
    console.log(koder[propiedad]);
}


//EJERCICIO INDIVIDUAL

Dado el siguiente objeto realiza las siguientes operaciones 
Un log donde veamos la suma total de notas
Opcional - Un log donde veamos el promedio de las notas a dos decimales
Hint, use toFixed() method

const grades = {
    first_test: 7.5,
    second_test: 10,
    third_test: 6,
   };

let result=0

for(propiedad in grades){
    result += grades[propiedad]
}   
console.log(result)


/*
const grades = {
    first_test: 7.5,
    second_test: 10,
    third_test: 6,
};

let aver=0
let result=0

for(propiedad in grades){
    aver ++
    result += grades[propiedad]
    aver= result/aver
}

console.log(result)
console.log(aver.toFixed(2))
*/