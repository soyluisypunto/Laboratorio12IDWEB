function potencia(base, exponente) {
  if (exponente === 0) {
    return 1; 
  }
  return base * potencia(base, exponente - 1); 
}
console.log("Ejercicio 21");
console.log(potencia(6, 4)); 
