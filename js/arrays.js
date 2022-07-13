/*coleccion de datos
pocisiones cuentan hacia abajo desde 0

let koder1 = "Mariana"
let koder2 = "Marco"

const koders =[
"Ma"
"Me"
"Cris"
"[Strings, 123]"
];

koders [2]= "CHristopher";
console.log(typeof koders);

//identificando un array

let koder1 = "Mariana"
let koder2 = "Marco"

const koders =[
"Ma"
"Me"
"Cris"
"[Strings, 123]"
];

koders [2]= "CHristopher";
console.log(array.isarray(koders));
console.log(koders instanceof Array);

//Metodos de array

Push -> agrega un elemento al final de array

const koders =["Mariana""Marco"]

/FIND METOD


let numbers = [1, 3, 4, 9, 8];

// function to check even number
function isEven(element) {
  return element % 2 == 0;
}

// get the first even number
let evenNumber = numbers.find(isEven);
console.log(evenNumber);

// Output: 4

//copywithin
//reverse



// ! Callback functions
// ! En js las funciones son first class citizen
las fucniones pasan como argumentos y dentro las podemos ejecutar
codigo asincrono, tenemos que esperar
Una funcion dentro de otra

// Caso 1 funciones independientes
// const a = (msg) => {
    console.log("Este es el mensaje", msg)
}

const b = () => {
  let msg = prompt("ingresa un mensaje:", msg);
};

let res = b()

a (res);

// ! metodos funcionales de arrays

// ! 1 ForEach -
Nos permite iterar de una manera mas simple
No necesita return
La logica se ejecuta dentro de su bloque de codigo
currentValue(valor actual de la iteracion), Index, copia Array
no modifica el array original

age += 4  significa age + 4


Let arrayTest = ["julio", "sofy", "jose"]

const callFun = (currentValue, Index, Array) => {
  console.log(currentValue);
  console.log(index:);
  console.log(Array:)
};

arrayTest.forEach(callFun);


EJERCICIO GRUPAL
/**
* Escribir una función
* Reciba como parametro un array de ciudades
* Retornar las ciudades capitalizadas
* capitalize(['méxicO','RIo', 'Los AngelEs', 'esTAMBUL])
* -> ['México','Rio', 'Los Angeles','Estambul']
* Usar el metodo de array ForEach
*/

//let citys = ["méxicO","RIo", "Los AngelEs", "esTAMBUL"]

/*
const capitalizado = (ciudades) =>{

  let ciudadesMayus = []

  ciudades.forEach((cv) =>{ 

  let cityCapitalizadas = `${cv[0].toUpperCase()} ${cv.slice(1).toLocaleLowerCase()}`  
  ciudadesMayus.push(cityCapitalizadas)
  
})

return ciudadesMayus

}

capitalizado(["méxicO","RIo", "Los AngelEs", "esTAMBUL"])

*/