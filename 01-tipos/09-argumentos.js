function suma(a, b) {
    console.log(arguments);
    return a + b;
}

let resultado = suma(2, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);