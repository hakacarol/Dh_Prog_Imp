/* Aula 12 - Métodos de Arrays - Filter
06/07/2021*/

//filter() é um método que etorna um novo array, com os elementos que atendem uma condição lógica

const numeros = [1, 2, -3, 4, 0 , 7, 8, 9, 19];

const numerosMaiores = numeros.filter (elemento => elemento > 0);

console.log(numerosMaiores);