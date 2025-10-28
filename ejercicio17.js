function mostrarDatos (nombre, edad, ...hobbies){
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
    console.log(`Hobbies: ${hobbies.join(", ")}`);
}
console.log("Ejercicio 17");
mostrarDatos("Luis", 17, "musica", "fútbol", "programación");