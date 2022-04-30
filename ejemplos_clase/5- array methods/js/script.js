"use strict";

console.log("----------------------------------------");
console.log("Utilizando el forEach");

const listaOriginal = [1, 2, 3]

// Version utilizando foreach
listaOriginal.forEach(numero => {
    console.log(`elementoActual: ${numero}`)
});
 
// Version utilizando for of
for (const numero of listaOriginal) {
    console.log(`elementoActual: ${numero}`)
};

// Ejemplo de qué sucede si capturamos el retorno del forEach

let numberArray = [1, 2, 3, 4, 5];
 
// salida: el cuadrado de cada número
let returnValue = numberArray.forEach(num =>
    console.log(`${num} x ${num} = ${num * num}`)
);

// no se modifica el array original
console.log(numberArray);
console.log(returnValue);

console.log("----------------------------------------");
console.log("Utilizando el map");

returnValue = numberArray.map(num => {
    return num * num;
});

// obtenemos un nuevo array como resultado
console.log(numberArray);
console.log(returnValue);

// Ejemplo de como encadenar funciones

// Pasar números a formato moneda
const returnValue2 = numberArray
  .map((num) => num * 2) // multiplicar todo por 2
  .map((num) => num.toString()) // pasar todo a string
  .map((string) => "$"+string); // agregar el símbolo $
 
// resultados
console.log(numberArray);
console.log(returnValue2);

console.log("----------------------------------------");
console.log("Utilizando el filter");

// Lista de números compelta
const numeros = [1, 2, 3]

// Vamos a filtrar y dejar pasar aquellos números mayor a 1
const numerosFiltrados = numeros.filter(numero => {
    return numero > 1
});

// resultado
console.log(numerosFiltrados);


// Filtra el array en función de un criterio de búsqueda (query)
const frutas = ['manzana', 'banana', 'uva', 'mango', 'naranja'];
 
function filterItems(query) {
    return frutas.filter( fruta => {
        // Buscar si "query" se encuentra contenido en la fruta
        return fruta.indexOf(query.toLowerCase()) > -1;
    })
}
 
console.log(filterItems('fru')); // []
console.log(filterItems('man')); // ['manzana', 'mango']