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

const change = (array) => {

    if(typeof array === "undefined"){    
        return "se necesita un array"; 
    }
    let change= [];
    for(let i=0; 1 < array.length; i++){

        let string

    }

}
