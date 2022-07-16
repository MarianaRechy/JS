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

//!Metodos de objetos

//!Keys

let Student = {
  name: "Lisa",
  age: 24,
  marks: 78.9,
};

// get all keys of Student
let std1 = Object.keys(Student);
console.log(std1);

// Output: [ 'name', 'age', 'marks' ]

//!Create
let Student = {
  name: "Lisa",
  age: 24,
  marks: 78.9,
  display() {
    console.log("Name:", this.name);
  }
};

// create object from Student prototype
let std1 = Object.create(Student);

std1.name = "Sheeran";
std1.display();

// Output: Name: Sheeran





//!Assign
// cloning objects o copy
The assign() method takes in:

target - The target object — what to apply the sources' properties to, which is returned after it is modified.
sources - The source object(s) — objects containing the properties you want to apply.

const obj = {
  name: "Alan Turing",
  age: 120,
};

let newObject = {};

const copy = Object.assign(newObject, obj);
// modifies the target object
console.log(newObject);
// returns the modified object
console.log(copy);

{ name: 'Alan Turing', age: 120 }
{ name: 'Alan Turing', age: 120 }


//!Entries
//Devuelve un pequeño array de un array padre.
const obj = { name: "Adam", age: 20, location: "Nepal" };
console.log(Object.entries(obj)); // [ [ 'name', 'Adam' ], [ 'age', 20 ], [ 'location', 'Nepal' ] ]

//!Seal
//Nos permite editar pero no  borrar.

//! value

SE PUEDE CONVERTIR A ARRAY Y EPLICAR METODOS DE ARRAY


const notas={
    examen1: 10,
    examen2: 7,
    examen3: 6,
}

let arr= Object.values(notas) 
console.log(arrNotas)

//Suma de notas usando for

let total=0
for(let i=0; i<arr.length;i++){
    total += arr[i]
}
console.log(total)

//suma de notas con forEach

arr.forEach((nota)=>{
   total += nota;
})

console.log(total)

//suma de las notas usando reduce

arr.reduce((acc,notas)=>{
    acc += notas
    return acc
},0)
console.log(total)


//! Freeze No deja sobreescribir
Object.freeze(objTest)


//! Object is, compara dos valores dentro de un objeto, recibe valor 1 y 2. Arroja verdadero o falso.
ARROJA UN VALOR BOLEANO

*/

/**
* Ejercicio 1.
* Realizar una funcion que tome como parametro un objeto
* y devuelva un array de arrays con la siguiente estructura
* [ [key, value], [key, value] ]
* makePairs( { a: 1, b: 2 } )
* => [ ['a', 1], ['b', 2]]
*


function makePairs(){
    const  valores = { 
        a: 1, 
        b: 2, 
    };

    console.log(valores);
    console.log(Object.entries(valores));
}


* Se tiene que realizar 2 soluciones,
* 1 con Object.entries() y
*  Otra con .map()



21:36
/**
* Dado un objeto de salarios
* Crear una funcion que retorne una lista
* con los salarios ordenados de menor a mayor
* orderSalary( salarios)
* -> [4000, 5000, 7000]
hint -> Usar metodo de objetos y luego un metodo de array para ordenar


const  orderSalary = {
    1: 7000,
    2: 5000,
    3: 4000,
}

function list() {
    console.log(orderSalary);

    const arr = Object.values(orderSalary)
    // [7000,5000,4000]
    console.log(arr.sort());
    // [4000,5000,7000]
} 

list();
*/