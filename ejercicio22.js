function crearSecuencia(inicio, paso){
    let num = inicio;
    return function (){
        num += paso;
        return num;
    }
}
const secuencia = crearSecuencia(5, 10);
console.log("Ejercicio 22");
console.log(secuencia());
console.log(secuencia());
console.log(secuencia());