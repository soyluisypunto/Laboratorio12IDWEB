function filtrarArreglo(arr, callback) {
  const resultado = [];

  for (let elemento of arr) {
    if (callback(elemento)) {
      resultado.push(elemento);
    }
  }
  return resultado;
}
const esPar1 = (num) => num % 2 === 0;
const arreglo_numeros = [2, 5, 8, 10, 3, 4];
console.log("Ejercicio 19");
console.log(filtrarArreglo(arreglo_numeros, esPar1));
