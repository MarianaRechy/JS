
//let a=7
//let b=6
//let c=5
//let result= a>b ? console.log("a es mayor que b") : console.log ("b es mayor que a")

//let result= a>b && a>c ? console.log("a es mayor") : b>a && b>c ? console.log("b es mayor") : console.log("c es mayor")//


/*
let a= parseInt(prompt("Ingresa un número"))
let b= parseInt (prompt("Ingresa un segundo número"))

let result= a>b ? console.log(`result: ${a/b}`) : a<b ? console.log(`result: ${a + b}`) : console.log(`result:${a*b}`)
*/

//Ejercicio 1
/*
let a= parseInt(prompt("Ingresar un número"))
const b= 2

let result= a%b === 0 ? console.log("número par") : console.log("número impar")
*/

//Ejercicio 2 
/*
let base= parseInt(prompt("Ingresar la base del triangulo"))
let altura= parseInt(prompt("Ingresar la altura del triangulo"))
const c=2

let result= console.log( `${base*altura / c}`) 
*/

let a= parseFloat(prompt("Ingresa un número"))
let b= parseFloat(prompt("Ingresa un segundo número"))
const operacion= parseFloat(prompt("Elige una opreación y registra el número de la lista 1:suma, 2:resta, 3:division, 4:multiplicación"))

switch (operacion){
    case 1: console.log(`Resultado:${a+b}`)
    break
    case 2: console.log(`Resultado:${a-b}`)
    break
    case 3: console.log(`Resultado:${a/b}`)
    break
    case 4: console.log(`Resultado:${a*b}`)
    break
}







