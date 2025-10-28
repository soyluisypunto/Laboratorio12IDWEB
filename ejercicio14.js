function acumulador(valorInicial) {
  let total = valorInicial;

  return function (nuevoValor) {
    total += nuevoValor;    
    return total;          
  };
}
const acumular = acumulador(10);
console.log("Ejercicio 14");
console.log(acumular(3));
console.log(acumular(4));
console.log(acumular(9));