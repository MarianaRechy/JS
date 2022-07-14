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




Reduce
recibe un callback y un inicialValue
total o previos value o acumulador


let arr= [1,2,3,4,5]

let result = arr.reduce((acumulador, cv, index, arr) =>) {
  acumulador += cv
  return acumulador
}), 100)

console.log(result)

//PRACTICA DE CLASE

// Función que reciba un array de nombre y esta debe devolver un string con las iniciales de los nombre
 
/   let arr = [1,2,3,3,4,5]

    const cbFun = (acumualudar, cv) => {
      acumualudar +=  cv
      return acumualudar
  }

    let result = arr.reduce(cbFun, 1000) 

    console.log(result)

    const koders = ['kelly', 'sebas','Adrian']

    result = koders.reduce((acc, cv) => {
      acc.push(cv[0]);
      return acc;
     }, []);


     result2 = koders.reduce((acc, cv) => {
       acc += `${cv} `;
       return acc;
      }, '');
     

    console.log(result)
    console.log(result2)/ getInitial(['Ferdinand','Jose','Maria','Dora']) -> FJMD






let arr= ['Ferdinand','Jose','Maria','Dora']

let resultone = arr.reduce((ac, cv,) => {
  ac += cv[0].toUpperCase()
  return ac
},"")

let result= resultone(arr);
console.log(result)



//!multidimencional arrays

const multi = [1,2,3] ["s", "f"]
  if (cv instanceof Array){

  }
multi.forEach((cv) =>){
  cv.forEach((innerValue) =>{
    console.log(cv)
  })
}



//PRACTICA CLASE

Dado una arreglo compuesto por arreglos,
* crea una función que calcule la suma de los arreglos
*
* additionMultiArr(  [ [1,2,3] , [1,3,2] , [3,2,1] ] )
* -> 18


let arrays=[ [1,2,3] , [1,3,2] , [3,2,1] ]

const sumArray= (input) => {

    let arrayAccum = 0

    input.array.forEach(item => {
        if(item instanceof Array){
          let result = item.reduce((accum,cv) =>{
              accum += cv
              return accum
          },0)
          arrayAccum += result
        } 
    });

    return arrayAccum
}

sumArray(arrays)
console.log(sumArray)

// función con .reduce()
// * Dado un array de numeros, obtener la suma de solo los elementos positivos
// * addAllPositives( [ 1, -4, 12, 0, -3, 29, -150] )
// * -> 42


let addAllPositives [ 1, -4, 12, 0, -3, 29, -150] 

const positiveNumbers.reduce = ((input)(cv) => {
       if(input!-Number){
        return input += cv 
       }

},"")

let result= positiveNumbers(addAllPositives)
console.log(result)
*/
