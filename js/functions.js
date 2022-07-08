/*Funciones
Son elementos esceneciales de desarrollo y nos ayudan 

Para utilizar funciones:
1 . Declara la funcion ->
 1.1 Utilizando la palabra function
 1.2 Identificador de la funcion descriptivo Camelcase
 1.3 El parametro o la lista de parametros, abrazdos entre parentesis -> (param1, param2.....)
 1.4 Bloque de codigo -> {....codigo a ejecutar}
 1.5 Opcional -> Retorno

 function imprime mensaje(){
    console.log("Esto es una funcion");
 }

 2. Invocar o llamar la funcion
 *Declarar una funcion no la ejecuta
 2.1 Invocarla o llamar de forma tacita
 2.2 funcionSuma ()
 2.3 Al invocar la funcion estamos ejecutando las lineas de codigo definidas en la declaracion
 2.4 En caso de tener parametros definidos es necesario pasarle dichos parametros
* Usar camelCase .
* Es recomendado un nombre descrptivo.

 funcionSuma();

 

 //EJERCICIO


 3.Retorno
 3.1 Utilizamos la palabra reservada "return"
 3.2 Parametros= son variables que toma la funcion al momento de su definicion. -> son neutros o agnosticos
 3.3 el codigo que sigue al return no se ejecuta.
 3.4 rompe el fujo (como break y continue loops)

 function imprimeMensaje(){
    console.log("Esto es una funcion");
    return "hola";
 }
let saludo = imprimeMensaje

function sumaValores(){
    let res= 1 + 1;
    return res;
}

argumento, son las variables que toma la funcion al momento de ser invocada, son conocimos o relativamente conocidos

 function imprimeMensaje(p1, p2){
    console.log(p1,p2);
    return 2+3
 }
imprimeMensaje("hola","mundo") <--- esto es invocar

"inicializar (p1, p2)=20 con signo de igual"

Valores por defecto
prompt()


//EJERCICIO

let usuario= (prompt("Escribe tu nombre completo"))
let vocal= usuario.match (/[aeiou]/gi)
let b=""

function vocales(a){
    for(i=0; i < a.length; i++){
        console.log (b=(a[i]))
    }
return b;
}

vocales(vocal)
console.log(b)

mutabilidad de argumentos
let b=10

function suma(num1, num2 =10{
    let a= num1 + num2;
    console.log(a);
    return a;
}

console.log(a);

Passing by reference
Passing by value
{}  objetos
[] arrays
los dos anteriores son pasados by reference

Passing by reference
                    0      1
let primerArray= ["texto, 123"]

function testNoPrimitive (arr{
    arr[0] ="otro texto"
})

si son alterados por lo que hay adentro



testNoPrimitive(primerArray);
console.log(primerArray);



Hoisting
comportamiento, todas las funciones van arriba
console.log (test);
var test=1;






Declarar la funcion antes de utilizarla

function t(){
}
console.log(t())

¿Que es una función?
Funcion encapsulada en la parabla reservada function

function funcionDemo(a,b){
    console.log(a,b)
    //codigo a ejecutar cuando se llame la funcion
}

funcionDemo(2,3);

scope
las funciones tienen que ser invocadas dentro del lugar donde se difinieron

{
    function A
}

{
    funcion B
    function A--->Error
}

lexical scope {De afuera hacia adentro si se puede, de adentro hacia afuera no}


