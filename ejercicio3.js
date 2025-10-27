 let a = 22;
 let b = 11;
 function esMultiplo(a , b){
    if(a % b === 0){
        return (`${a} es multiplo de ${b}`);
    } else {
        return (`${a} no es multiplo de ${b}`);
    }
 }
 console.log("Ejercicio 3");
 console.log(esMultiplo(a , b));