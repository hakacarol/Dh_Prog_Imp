/* Aula 12 - Métodos de Arrays - Splice
06/07/2021*/

// Splice = emendar
// O método array.splice(), serve para remover  e adicionar os elementos de um array
// array.splice (início, quantidade, item1, item2, ...);
// quantidade: opcional - numeros inteiros a eliminar do array.
// itens:

const frutas = ['Banana', 'Laranja', 'Limão', 'Maça', 'Manga'];
console.log(frutas);

frutas.splice(2, 0, 'Mamão', 'Kiwi');

console.log(frutas);
console.log('Lista com adição.....: ' ,frutas);
console.log('Lista com adição.....: ' + frutas);