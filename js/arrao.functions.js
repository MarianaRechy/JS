/*
No necesitamos la palabra reservada functions
no en todos los casos es necesaria la palabra reservada return para regresar
no podemos hacerle referencia antes de invocarlas
forma moderna de declarar funciones
type notacion
tipado debil, no hay que indicarle el tipo de dato
Refactorizar ->> modificar el codigo
const arrowFunction = (p1, p2)=> {
    console.log(p1,p2)
    return 1;
};

const arrowFunction = (p1) =>{
    console.log(nums)
}

//funcion flecha (como expresion)
const funcionComoExpresion = (...nums) =>{
    console.log(nums)
};

funcionComoExpresion(2,3,4,"sf"234)

//Consideraciones de sintaxis
si le podemos SOLO un parametro no lleva parentesis.
CON UNA SOLA SENTENCIA PODEMOS QUITAR LA LLAVE

const arrowFunction = p1 => console.log(nums)
const arrowFunction = p1 => P1 + 1; --> NO NECESITA RETUNR





