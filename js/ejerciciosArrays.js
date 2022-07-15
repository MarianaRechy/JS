/*
Ejercicio 1 
* Realizar una función que reciba como parametro 1 array de numeros
* Y devuelva un array con solo los elementos Pares de ese array
* p.ej.
* -> evenOnly( [1,2,3,4,18] ) -> [2,4,18]
* -> evenOnly( [10, 2, 5] ) -> [10,2]
* -> evenOnly() -> 'Se necesita un array'
*
* Pista / Hint, debemos iterar el array 


const arrayNumbers= [6, 8, 10, 7, 12, 7, 4, 10];

const functionNumbers = (array)=>{
    let result=[]
        for(i=0; i<array.length; i++){
            if(array[i] %2===0){
                result.push(array[i])
            }
        }
        return result;    
}

let result=functionNumbers(arrayNumbers)
console.log(result)

*/
/**
* Ejercicio 2 *Opcional
* Función que reciba como parámetro una array de strings
* y devuelva el primer y último carácter de cada string
* p.ej.
* -> firstAndLast ( ['hola', 'mundo'] ) -> ['ha', 'mo']
*
* Pista / Hint, debemos iterar el array 

*/
/*
const change = (array) => {

    if(typeof array === "undefined"){    
        return "Se necesita un array de strings"; 
    }

    let change= [];
    for(let i=0; 1 < array.length; i++){

        let string = array [i];
        let adjust= string[0] + string.substr(string.length -1);
        change.push(adjust);
    }
    return change;
};

console.log(change([paloma, blanca]));
console.log(change([paloma, negra]))
console.log(change());
*/
/*


// ! Estos son los ejercicios de tarea 11.07
Ejercicio 1 
* Función que reciba una palabra
* Retorna la palabra invertida
* La reversa del string lo haremos usando métodos de array
*  hint :  a un string no podemos aplicarle métodos array pero hay métodos de string que nos devuelve un array
*
* reverseStr('hola mundo')
* -> 'odnum aloh'


let fun="Hola mundo"

const change=(input) =>{
    return console.log(input.split("").reverse("").join(""));
}

let result= change(fun)
console.log(result)

/*
Ejercicio 2 
* Dado el siguiente arreglo de ciudades
*   ['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA']
* Generar una función que capitalize cada elemento del array
* => Se puede resolver con .forEach() o .map()

const arrayCap= (array) => {

    let result=[]

        array.forEach((adjust) => {
            let arrayCapitalized = `${adjust[0].toUpperCase()}${adjust.slice(1).toLowerCase()}`
            result.push(arrayCapitalized)
        })

    return result;
}

let result=arrayCap(['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA']);
console.log(result)

/*

Ejercicio 3
* Dado un arreglo con nombres de personas,
* Función que devuelva un arreglo con los nombres de las personas que empiezan con vocales y además capitalizados
*
* onlyNamesVowels( ['jorge','ana','ivan','sergio','oscar' ] )
* -> ['Ana','Ivan','Oscar']
*
* => Se puede resolver con .forEach() o .filter()


let array= ['jorge','ana','ivan','sergio','oscar']

const change = (input) => {

    let result=[]

    if(input.match[0](/[aeiou]/gi)){
        input.forEach = (adjust) => {
            let arrayCapitalized = (`${adjust^[0].toUpperCase()} + ${adjust.slice(1).toLowerCase}`)
            result.push(arrayCapitalized)
        }
    }
    return result;
}

let result=change(array)
console.log(result)


*/
