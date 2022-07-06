/* ciclos -->

iteración --> repetir una cosa una y otra vez

for loops
sintaxis

for (elemento1; elemento2; elemento3){
    codigo a iterar
}

elemento 1 -> variable numérica se ejecuta una sola vez
elemento 2 -> evaluacion, se ejecuta en cada iteracion
elemento 3 -> incremento o decremento, se ejecuta en cada iteracion


for(let i=0 ; i<3 ; i++) {
    console.log("Esto es una iteración!")
}

for(let i=0 ; i<3 ; i++) {
    console.log("La cuenta va en ${i}");
}

tabla de multiplicar
for(let i=0 ; i<=10 ; i++) {
    console.log(`5 X ${i} = ${5*i}`);
}

while loop
while(elemmento1){
    codigo a iterar
    ?elemento2 incremento o decremento
}

elemento1 -> condiciona a evaluar -> se ejecuta en cada iteracion
elemento2 incremento o decremento -> opcional recomendado para no entrar en overflow

let j=0
while(j<3){
    console.log(j)
    j++
}

do while

Do{
    codigo a iterar
} while(elemento1)

elemento1 -> evaluacion booleana -> se ejecuta la final de cada iteracion
elemento2 -> incremento o decremento

let k=0
do{
    console.log(k)
    k++
}
while (k<3)

*/
