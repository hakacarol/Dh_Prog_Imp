/* Aula 12 - Métodos de Arrays - Sort Numeros
06/07/2021*/

// Sort = ordenar
// array.sort() nos ajuda a ordenar os elementos de uma array

const numeros = [50, 100, 10, 5, 25, 10];

console.log(numeros.sort());

// ordem crescente
console.log (numeros.sort (
    function (a,b) {
        return a-b; // a-b = negativo, menor q a  a-b = positivo, maior que a
    }
))

// ordem decrescente
console.log (numeros.sort (
    function (a,b) {
        return b-a; // a-b = negativo, menor q a  a-b = positivo, maior que a
    }
))