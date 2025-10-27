function mayorDeTres(a , b , c){
    const lista = [a , b , c];
    let mayor = lista[0];
    for(let i = 1; i < lista.length ; i++){
        if(mayor < lista[i]){
            mayor = lista[i];
        }
    }
    return mayor;
}
console.log("Ejercicio 4");
console.log("El numero mayor es: "+ mayorDeTres(2 , 3 , 8));