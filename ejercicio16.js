function media (... numeros){
    let suma = 0;
    for (let n of numeros){
        suma +=n
    }
    const promedio = suma / numeros.length
    return promedio.toFixed(2);
}
console.log("Ejercicio 16");
console.log(media(3 , 1 , 6, 10));