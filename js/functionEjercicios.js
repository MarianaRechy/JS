/*
Ejercicio 1 ->
Función que pida una palabra al usuario
Invierta la palabra
y la retorna, almacenamos ese retorno en una variable y al interpolamos en un alert usando template literals
reversedString('hola') -> 'aloh'


//
let usuarioWord=(prompt("Escribe una palabra"))

function ejercicioInvertir(a){
    for(let i= a.length-1; i>=0; i--){
        a=a.charat(i);
    }
    return a;
}
let resultado=(ejercicioInvertir(usuarioWord))
window.alert(resultado)

/*
Ejercicio 2 ->
Función que pida 3 numeros como parametro
2 números obligatorios y 1 opcional con valor de 3
Arroje la suma de esos 3 números
Posibles resultados
-> addThreeNumbers(3,4,5) -> 12
-> addThreeNumbers(3,4) -> 10
-> addThreeNumbers(3) -> 'Faltan datos'
-> addThreeNumbers() -> 'Faltan datos'


const fuctionNumbers = (x, y, z=3) =>{
    if(typeof x === "undefined" || typeof y ==="undefined"){
        console.log("Números obligatorios")
    }
    return x + y + z;
}

console.log(fuctionNumbers(2,3,4))
console.log(fuctionNumbers(2,3,))
console.log(fuctionNumbers(2))
console.log(fuctionNumbers())


ejercicio 3 ->
Función que pida al usuario los grados Centigrados en su localidad
Convertirlos a grados fahrenheit
Retornar el valor y ese valor usarlo para
Arrojar un alert con el resultado
-> convertTemp(25) -> La temperatura es de 77 ºF
-> convertTemp() -> 'Faltan datos'


// Quise hacer el ejercicio con Ternarios y no me funciona la condicion.

let userDegrees=parseInt(prompt("Ingresa la temperatura en grados centígrados de tu localidad"))

const resultTemp = (a) => {
return typeof a=== 'undefined' || a === '' ? window.alert("Falta datos") : (a * 9 )/5 + 32;
}

let result=resultTemp(userDegrees)
window.alert(`La temperatura es de ${result} grados Farenheit`)


/*
Ejercicio 4 ->
Función que reciba una numero e imprima las tablas de ese numeri, validamos que ese numero este entre 1 y 10

let number=6

const table= (a) =>{
    if(a>1 && a<10){
        for(i=1; i<=10; i++){
            console.log(`${a} X ${i} = ${a*i}`);
        }
    }
}

let result= table(number)



Ejercicio 5 ->
Función que pida al usuario un número (N) entre 1 y 100
Mandar un alert con suma desde el 1 hasta N
N debe tener un valor por defecto =  3
addNumberLimit() -> 6
addNumberLimit(4) -> 10
addNumberLimit(5) -> 15


let n=paresInt(prompt("Ingresa un número entre 1 y 100"))

const table=(a) =>{

    if(typeof a=== 'undefined' || a === ''){
        a=3
    }
    else for(i=1; i<=a; i++){
    let sum= i += i
    return sum;
}
}

let result= table(n)
window.alert(result)


*/
