let nota1 = parseFloat(prompt("Ingrese la nota 1:"));
let nota2 = parseFloat(prompt("Ingrese la nota 2:"));
let nota3 = parseFloat(prompt("Ingrese la nota 3:"));

function promedio(a , b , c){
    let promedio_notas =  (a + b + c)/3;
    return ("El promedio de sus tres notas es: "+ promedio_notas.toFixed(2));
}
console.log("Ejercicio5");
console.log(promedio(nota1, nota2, nota3));