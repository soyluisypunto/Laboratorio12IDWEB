let texto_11 = "Hola   con    todos";

function procesarTexto (texto){
    function limpiarespacios(){
          return texto.trim().split(/\s+/).join(" ");
    }
    function contarPalabras(){
         let textoLimpio = limpiarespacios(); 
        if (textoLimpio === "") return 0;
        return textoLimpio.split(" ").length; 
    }
    let textoLimpio = limpiarespacios();
    let cantidadPalabras = contarPalabras();

    return `Texto limpio: ${textoLimpio}\nCantidad de palabras: ${cantidadPalabras}`;
}
console.log("Ejercicio 11");
console.log(procesarTexto(texto_11));

