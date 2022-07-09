
//ejercicio 1 - clase
/*
let usuario= (prompt("Escribe tu nombre completo"))
let dos= usuario.match (/[aeiou]/gi)


for(i=0; i < dos.length; i++){
        console.log(dos[i])
}
*/

//ejercicio 2 - clase
/*
let usuario= (prompt("Escribe tu nombre completo"))
let tres= usuario.match (/[BCDFGHJKLMNPQRSTUVWXYZ]/gi)

for(i=0; i < tres.length; i++){
        console.log(tres[i])
}
*/

//ejercicio 3

//let num= parseInt(prompt("Ingresa un número del 1 al 10"));
//let i=0;

//while(i<=10){
    //console.log(`${num} x ${i} = ${num*i}`)
   // i++
//}

//for(let=amarillo; i<3 ; i++) {
   // console.log("La cuenta va en ${i}");
//}

//  let i = 1 
//  let numA = parseInt (prompt('Ingrese un número entre 10 y 100'));
//  do {
//      if(i % 2 === 0)
//     console.log(i); 
//     i++
//  } while (i < numA)

//ejercicio 2 - grupal

//Este ejercicio no funciona aún, no entiendo muy bien la logica cuando estamos usando strings en vez de números.
//Ejercicio 2
//Pedir al usaurio una oracion
//Imprimir un string con todas las vocales
//Imprimir un string con todas las consonantes
//Resultado de ejemplo
//p.ej. "Hola mundo"
//Consonantes -> hlmnd
//Vocales -> oauo


/*
let usuario= (prompt("Escribe una oración"))
let dos= usuario.match (/[aeiou]/gi)
let tres= usuario.match (/[BCDFGHJKLMNPQRSTUVWXYZ]/gi)

console.log(dos)
for(i=0; i < dos.length; i++){
        console.log(dos[i])
}

for(i=0; i < tres.length; i++){
        console.log(tres[i])
}


//ejercicio 3 grupal

let r=(prompt("Escribe una palbra"))
let rReverse= " ";
console.log(r.length)

for( let i=r.length-1; i>0; i--){
    rReverse = rReverse + r[i];
}
console.log(rReverse)
*/


//TAREA

/*Ejercicio 1
Escribir un programa de arroje la suma de los múltiplos de 3, 5 o 7 que hay entre 1 y 100
Resolver con For, While y do While*/

/*
let num = parseInt(prompt("Escribe 3, 5 ó 7 para saber sus multiplos"))
let sum = 0

if(num == 3 || num == 5 || num == 7){
    for(i=1 ; num*i<=100 ; i++) {
        console.log(`${num} X ${i} = ${num*i}`);
        sum = sum + num*i
    }
    console.log(`la suma de los multiplos de ${num} es ${sum}`)
}
else{
    window.alert("Número Inválido")
}
*/

/*Ejercicio 2
Pedir el usuario 1 número entre 1 y 100
sumar todos los números entre el 1 y el numero ingresado
Mandar un alert con el total
Resolver con For, While y do While
Por ejemplo: 5
->  15*/

/*
let num= parseInt(prompt("Escribe un número entre el 1 y 100"))
let sum = 1
let i = 2
*/

/*Utilizando  DO WHILE
if(num>100){
    window.alert("Número invalido")
}
else if(num<=100){
do{
    sum = sum + i; 
    i++;
}
while(i <= num)
window.alert(sum)
}
//termina ejercicio 
*/
/*
//UTILIZANDO FOR
if(num>100){
    window.alert("Número invalido")
}
else if(num<=100{
for (i=2; i<=num; i++){
   sum = sum + i;
}
window.alert(sum)
}
//Termina FOR
*/
/*
//WHILE
if(num>100){
    window.alert("Número invalido")
}
else if(num<=100){
while (i <= num){  
    sum = sum + i; 
    i++;
}
window.alert(sum)
}
//termina WHILE 
*/
 

/*Ejercicio 3
pedir una oracion al usuario
Contar las letras "a", "e" y espacios,
Resolver con For, While y do While
Por ejemplo 'hola kodErs'
 ->  A -> 1
 ->  E -> 1
 ->  Espacios -> 1 */

 /*
 let user= (prompt("Escribe una oracion"))
 let a= user.match(/[a]/gi).length
 let spa= user.match(/[" "]/gi).length
 let e= user.match(/[e]/gi).length
 let i=0
*/

/*
//DO WHILE
do{
    console.log(`Número de "a": ${a}`)
    console.log(`Número de "e": ${e}`)
    console.log(`Número de "Espacios": ${spa}`)
    i++;
}
while(i<1)
//DO WHILE END

*/

 /*
//WHILE
while(i<1){
    console.log(`Número de "a": ${a}`)
    console.log(`Número de "e": ${e}`)
    console.log(`Número de "Espacios": ${spa}`)
    i++;
}
*/
// WHILE END

 /*
 //FOR
 for(i=0; (i<1); i++){
    console.log(`Número de "a": ${a}`)
    console.log(`Número de "e": ${e}`)
    console.log(`Número de "Espacios": ${spa}`)
 }

// FOR END
 */


 



