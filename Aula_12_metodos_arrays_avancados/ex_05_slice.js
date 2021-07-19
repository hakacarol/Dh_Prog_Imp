/* Aula 12 - Métodos de Arrays - Slice
06/07/2021*/

// slice = fatiar
// O método array.slice(), retorna os elementos selecionados da matriz,
// sintaxe: array.slice(ínicio, fim)

const frutas = ['Banana', 'Laranja', 'Limão', 'Maça', 'Manga'];

const citricas = frutas.slice (1, 3);

console.log(citricas);