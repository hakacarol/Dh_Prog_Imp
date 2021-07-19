/* Aula 12 - Métodos de Arrays - Flat
06/07/2021*/

// Flat = plano
/* Este método é feito para "desembrulhar" sub-arrays dentro de array,
ooou seja, ele não modifica o array original */

let numeros = [1, 2, 3, [[22], 4,5],[6]];
console.log(numeros);

novoArray = numeros.flat(1);
console.log(novoArray);

novoArray = numeros.flat(2);
console.log(novoArray);