let precio = 143.2;

function calcularDescuento(precio , porcentaje){
    return (precio * porcentaje)/100;
}
const precio_final = precio - calcularDescuento(precio , 25);
console.log("Ejercicio 7");
console.log(`El descuento obtenido es de ${calcularDescuento(precio , 25).toFixed(2)}`);
console.log(`Precio final es ${precio_final.toFixed(2)}`);
