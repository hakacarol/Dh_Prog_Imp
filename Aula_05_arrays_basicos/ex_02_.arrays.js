/* Aula 05 - Arrays (variáveis compostas): criar um conjunto de dados ordenados
11/06/2021*/

// Estrutura -[]: para indicar início de um array e "," para separar os elementos
// Podemos armazenar quaquer quantidade de elemntos (string, número, boolean)
// ex.: let meuArray = ['Star Wars', true, 23];

let filmesFavoritos = ["Star Wars", "Kill Bill", "Alien"];
console.log(filmesFavoritos[2]);

// Acessamos o filme Alien na posição 2 do índice.
// Lembrar das posições, sempre começa com o 0: Star W [0] Kill Bill [1] Alien [2]

let pessoa = ["Carolina", 31, 1.66, false, ["Música", "café"]];
console.log(pessoa[4])

// tamanho da array
console.log(pessoa.length)
