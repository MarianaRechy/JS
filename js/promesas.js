/*
//!promesas

console.log ("a")
console.log ("b")

setTimeout(() =>{
    console.log ("f")
},2000)

console.log("c")
console.log("d")

//Estados de las promesas
//Pendiente
//fullfilment -> resuelta de forma positiva
//rejected -> rechazada

let storeOpen = null


const proFun= () => {
    return new Promise((resolve, reject) => {
        if (storeOpen === true){
          resolve ("comprado")
        } else if (storeOpen === false){
          reject("No comprado")
        }    
      }) 
      
      .then((res)=>{
        console.log(res)
    
    })
}

BuySomething
.then((res)=>{
    console.log(res)

})
.catch((error)=>{
    console.log (error)
})

.finally(()=>{
   console.log("se ejecuta ualquiera") 
})



//!then resultados de resoluciones positivas
//!catch
//!finally en cualquiera d elos escenarios
//!cuando concatenamos hay que agregar return

try{

} catch (error) {
    console.log (error)
}

//! try cachar errores, permite el flujo

//!async /await



const proFun= () => {
    return new Promise((resolve, reject) => {
        if (storeOpen === true){
          resolve ("comprado")
        } else if (storeOpen === false){
          reject("No comprado")
        }    
      }) 
      
      .then((res)=>{
        console.log(res)
    
    })
}




const asyncFunction = async () => {
    try {
        let result = await primerPromesa
        console.log()
    } catch (result){
        console.log(error)
    }
}


//!fetch() trabaja a base de promesas

fetch("https://rechy-kodemia-default-rtdb.firebaseio.com/post.json")
.then((res)=>{
    console.log(res)

}) 




//Cuando queremos setear un metodo diferente 
//tenemos que pasarle el segundo parametro, que es un objeto, que son las opciones de los metodos

const newPost ={
  title: "nuevo post",
  body:"lomkdnjkfdjfhdjfhjdfhd",
  data:"77/77/77",
}

fetch(url),
{
    method: "POST",
    body: JSON.stringify(newPost),
    Headers: {"Content-type":"application/json; charset=UTF-8"}
.then((res)=>{
    console.log(res)

})
.then((res)=>{
  console.log(res)

})
.catch((error)=>{
  console.log (error)
})
}

*/

