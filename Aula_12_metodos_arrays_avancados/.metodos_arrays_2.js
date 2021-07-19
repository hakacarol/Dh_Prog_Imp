/* Aula 12 - Métodos de Arrays
06/07/2021*/

/* SLICE
.slice() - Retorna uma cópia do array.
Para isso é necessário determinar dois parâmetros, índice inicial e final (opcional).

Caso o índice inicial seja negativo, é extraído os elementos se iniciando no final
do array, caso omitido o padrão é 0 e se for um índice maior que o tamanho do
array, retornará um array vazio.

Caso o índice final seja negativo, ele conta para o final, array.slice(3, -1) extrai do quarto elemento até o penúltimo. 
Se for maior que o tamanho do array ou omitido, extrai para o final do array.

Estrutura:

array.slice (inicio, fim); indicamos os índices de inicio e fim para obter um novo array
*/

// Exemplo:
let numeros = [3, 4, 5, 6, 7];

let subArray = numeros.slice (0, 3);

console.log(subArray); // [3,4,5]

let subArray1 = numeros.slice (1);

console.log(subArray1); // [4, 5, 6, 7]

console.log('---------------------------------------------------------------');
/* SPLICE
.splice() - Este método nos ajuda a remover ou adicionar elementos de um array.

Recebe três parâmetros:

Inicio: O índice do primeiro elemento (onde começará a mudança).
Quantidade: Opcional - Número de inteiros a eliminar (deve ser do tipo inteiro).
Itens: Indica os elementos que serão adicionados ao array. Caso seja omitido, ele apenas remove.


Estrutura:

array.splice(inicio, quantidade, item1, item2, …); Indicamos o inicio, itens a serem removidos e os itens que serão adicionados.
*/

// Exemplo:
let numeros1 = [3, 4, 5, 6, 7];

numeros1.splice(0, 0, 2);

console.log(numeros1); // [2,3,4,5,6,7]

// Array atual - [2,3,4,5,6,7]

numeros1.splice(1, 2);

console.log(numeros1); // [2,5,6,7]

/* SORT
.sort() - Ajuda a ordenar os elementos de um array.

Ele recebe um callback como um parâmetro (opcional) que especifica o modo de classificação, 
se for omitido, o array é ordenado com o valor da string (Unicode), converte cada elemento em uma string. 
A callback recebe dois parâmetros, ambos elementos que serão comparados.

Estrutura:

array.sort(); // ordenar com posição de valor Unicode

array.sort(callback); // a callback com parâmetros

*/

// Exemplo:
let marcas = ['samsung', 'xiaomi', 'apple'];

marcas.sort(); // ['apple', 'samsung', 'xiaomi']

console.log(marcas);

let numeros2 = [10, 3, 4, 52, 6, 7];

numeros2.sort( function (a,b) { //A callback por sua vez, recebe dois parâmetros. O número e anterior que será comparado.
    return a-b; // Definimos uma lógica para ordenar do menor para o maior. // [4, 7, 8, 9, 10, 52]
}); 

console.log(numeros2); 

/* FLAT
.flat() - é usado para desembrulhar sub-arrays dentro de arrays, ou seja, ele não modifica o array original.
Recebe como parâmetro (opcional) um nível de profundidade que especifica o quanto o array aninhado deve ser achatado, se for omitido, por padrão leva 1 como valor.

Estrutura:

array.flat(); // parâmetro omitido

array.flat(n); // parâmetro definido. Nível n.
*/

// Exemplo:

let numeros3 = [1, 2, 3, [4], [[5, 6]]];

let novoArray = numeros3.flat(); // [1, 2, 3, 4, [[5, 6]] - omitimos o nível, que passou a ser 1.
console.log(novoArray); 

novoArray = numeros3.flat(2); // [1, 2, 3, 4, 5, 6] - definimos o nível 2.
console.log(novoArray); 


/* INCLUDES
.includes() - Verifica a existência de um elemento no array, retornando true caso exista, e false se não.

Parâmetros que recebe:
Elemento: valor que será procurado no array.
Inicio: Índice na qual se iniciará a busca.

Estrutura:

array.includes(elemento, inicio); // Indicamos o elemento a buscar e a posição que começará a busca
*/

// Exemplo:

let numeros4 = [3, 4, 5, 6, 7];

let existe = numeros4.includes(4); // true
console.log(existe);

existe = numeros4.includes(4, 2); // false
console.log(existe); 

/* FIND
.find() - Retorna o primeiro valor que cumprir a condição especificada na callback.
A callback irá retornar true ou false, e receberá três parâmetros:

Elemento: elemento atual do array.
Indice: Opcional – posição atual do elemento.
Array: array que está sendo percorrido.

Estrutura:

array.find(callback(elemento, indice, array)); // indicamos o elemento a buscar e a posição que irá começar
*/

// Exemplo:

let moedas = [
    { nome: 'Bitcoin', simbolo: 'BTC' },
    { nome: 'Bitcoin', simbolo: 'BTC' },
    { nome: 'Ethereum', simbolo: 'ETH' },
    { nome: 'Cardano', simbolo: 'ADA' },
];

moedas.find( function (moeda) { // callback
    console.log(moeda)
    return moeda.nome === 'Bitcoin';
}); // {nome: 'Bitcoin', simbolo: 'BTC'}
