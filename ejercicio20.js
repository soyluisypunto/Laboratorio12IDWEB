function descargarArchivo(url, callback) {
  console.log("Descargando...");
  callback(url);
}

function descargaCompleta(url) {
  console.log(`Descarga completa de ${url}`);
}

console.log("Ejercicio 21");
descargarArchivo("https://example.com/archivo.txt", descargaCompleta);
