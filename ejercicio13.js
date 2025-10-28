function crearContador(){
    let num = 0;
    function incrementar(){
        num++;
        return num;
    }
    function resetear(){
        num = 0;
        return num;
    }
    return {incrementar , resetear};
}
const contador = crearContador();
console.log("Ejercicio 13");
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.resetear());