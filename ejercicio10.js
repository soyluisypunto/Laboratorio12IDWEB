let texto_1 = "hola";
   const mayusculas = texto => texto.toUppercase();
   const signo = texto => texto + "!";
const componerTransformacion = (funcion1, funcion2) => texto => funcion2(funcion1(texto));
const transformar = componerTransformacion(mayusculas, signo);

console.log("Ejercicio 10");
console.log(transformar(texto_1));

