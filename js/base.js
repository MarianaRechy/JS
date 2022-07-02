console.log("hola koders");
// Esto es un comentario

/* Esto es
un 
comentario
multilinea
*/

// Datos en JS
    // Identificador
    // Reglas o buenas practicas
    // No inician con digitos
        // let 9varable=9; -> Error
    // No acepta palabras reservadas
        // let else= "else" => Error
    // Consideración; Sensible a las mayus y minus
    // Buena practica; camelCase 99% = PascalCase -> Clases - CONSTANTE
        // let ferdinandMarcoBrachoCardoza;
    //Buena practica; Naming descriptivo
        // -> estudiantesKodemia="koders"
    //Reglas: No deben contener caracteres especiales (, ! @)

// Variables y constantes
    //(Espacio de memoria que se activa con un identificador)
    //Variable = Mutabilidad
    //Constante= No cambia

    // Variables - palabras reservadas para declarar; var y let
        //let edadKoder =25;
        //var alturakoder=165 se sobreescribe
            //palabraReservada -> Identificador -> operadorAsignacion ->  Valor
            // let test =1
            // test= 2
            // test =9

    //Recomendacion/Buena practica siempre usar Let


//Reglas de invocacion

    // console.log (koder);
    //var koder = "Mariana"

    //Hosting


    // Terminología
    //Declaracion -> let koder;
    //Asignacion o definicion -> koder= "Jose"
    //Inicializacion --> let koder2 = "sandra";

//Constantes
    //URL -> Const
    //Pi -> Const
    //const URL ="www.google.com"
    //puntajemaximo -> const

//Diversas formas de declaracion e inicializacion
    //let primerPuntaje; -> undifaned
    //let tercerPuntaje = segundoPuntaje;
    //let cuartoPuntaje= segundoPuntaje + 1000;
    //let quintaPuntaje = 1 + 2 + 3;
    // console.log (puntajeMeximo);

//Declaraciones múltiples

//let primerkoder, segundokoder, tercerkoder;

//primerKoder = "Sebastián"
// let cuartoKoder]= "Marco"
//     quintoKoder = "Sofy"
//     sextaKoder= "Eduardo";

//console.log (cuartoKoder, primerKoder)
//septimoKoder=}"Cristopher"; -> var septimoKoder

// Tipos de Datos
    //Primitivos
        //String -> Una cadena de caracteres. Comillas simples o dobles.
    //Numbers
        // let primerNumero= 20;
        //let segundoNumero= 10.05;
    //Booleans
        //true false
    //Undefined 
        //Representa la ausencia de un valor
    //Null
        //Hace referncia a un valor nulo
//No primitivos -> refernce data type
    //Array
        //Coldecciones de datos indexados
        //let myFirstArray=["a", 2, true, null]
    //Objects
        // let user= {first_nave:"Ferdinand", last_name: "Bracho"};
        //console.log (user.age)

//typeof Operator
    //let numerico =11;
    //let text ="Esto es un texto"
    //console.log (typeof numerico);
    //console.log(typeof text);

//Concatenacion de string
    //Usando el operador de suma
    //let pimerText= "soy uno"
    // let segundoText= "soy dos"

   //Templates literals
   // "" -> backtic
   // let fisrtName= Mariana
   //console.log ("Esto es un tamplate ${firstName}");
   //console.log ("Mi edad es ${15+mitadEdad}");

//Formas de hacer output
    //console.log
    //console.warn ("Esto es una advertencia")
    //console.error ("Esto es un error")
    //console.group ("20g")
    //console.goupEnd("20g")
    //console.time
     
    //alert("Esto es una alerta");

//Formas de hacer input
    //prompt ("Ingreso de datos");
    // let data = prompt ("Ingreso de datos");
    // console.log (Esta es mi data ${data});

    //window.prompt ()
    //window.console.log ("adkdj");

   // let data= prompt ("Ingresa tu nombre"; ´, "nombre");
    //console.log ("Esta es mi data ${data}´);

    //Cast string to numbers
        //parseInt
        //parseFloat
    //console.log (paraseInt) 

//Operadores 
    //Aritméticos
     //modulo sirve para diferenciar numeros pares de impares
     //potencia console.log ("x ** y=", x** y);
     //Asignación + operadores a/=2   a+=   a*=

//Comparacion
    // == comparacion
    //let a=1
    //let b=2
    //console.log(a==b) -> responde con true o false

    // === comparación estricta
    //Se evalua el valor y el tipo de dato
       //let a=1
       //let b="2"
    //console.log(a===b) -> responde con true o false

    // != not equal
         //let a=1;
         //let b=2;
    //console.log(a !=b) -> responde con true o false

        // !== not equal estricto
         //let a=1;
         //let b=2;
    //console.log(a !==b) -> responde con true o false

    // > Mayor que...
    // < Menor que...
    // <= Menor o igual que ...
    // >= Mayor o menor que ...

    // ? Logicos

    // AND && true&&true = true
    // false && true = false
    // true&& falso= false

    // OR -? ||
    // false || true = true
    // false || false = true
    // false || false = false


    // NOT -> !
    // ? Precedencia de los operadores
    //let x = 10 + 10 * 3; hace primero la multiplicacion, despues la suma
    //let x = (10 + 10) * 3; primero la suma


let data= prompt("Ingreso de temperatura");
console.log (`Grados Ceclius: ${data * 9/5 + 32}`)





















