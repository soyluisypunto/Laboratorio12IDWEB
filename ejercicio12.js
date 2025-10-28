const operacionesMatematicas = (a, b) => {
    const sumar = () => a + b;
    const restar = () => a - b;
    const multiplicar = () => a * b;
    const dividir = () => a / b;

    return { sumar , restar , multiplicar, dividir};
};

const ejemplo = operacionesMatematicas(10,20);
console.log("Ejercicio 12");
console.log(ejemplo.sumar() + "\n" + ejemplo.restar() + "\n"+ ejemplo.multiplicar() + "\n" + ejemplo.dividir());