/* Aula 12 - Métodos de Arrays
06/07/2021*/

/*MAP
.map() - recebe uma função como parâmetro (callback).
Faz um loop no array e retorna um novo array modificado.
As modificações serão aquelas que programamos em nossa função de callback.

Estrutura:

array.map (function (elemento) {
// definimos as modificações que queremos aplicar sobre cada elemento do array
});
*/
let numeros = [2, 4, 6]; 

let dobro = numeros.map (function (num) { // numeros.map - map | (function (num) - callback - Essa função, por sua vez, receberá um parâmetro que será os elementos do array. No nosso caso será um número. Devido a isso, o nome do parâmetro é num
    return num * 2; // Multiplicamos por 2 cada número
});

console.log(dobro); // [4,8,12]

/* FILTER
.filter() - Este método também usa uma função como parâmetro.
Realiza um loop no array e filtra os elementos com base em uma condição existente na callback.
Retorna um novo array que contém apenas os elementos que atendem a essa condição, ou seja, poderá ter um número menor de elementos comparado ao anterior.

Estrutura:

array.filter (function (elemento) {
    definimos a condição que queremos aplicar
    como filtro para a criação do novo array
});
*/ 

// Exemplo:
let idades = [22, 8, 17, 14, 30];

let maiores = idades.filter (function (idade) { // (function (idade) - callback - receberá um parâmetro que será os elementos do array. No nosso caso será uma idade. Devido a isso, o nome do parâmetro é idade.
    return idade > 18;
});

console.log(maiores); // [22, 30]

/* REDUCE
.reduce() - percorre a array e retorna um único valor.
Ele recebe uma callback para ser executada em cada elemento do array.
Este, por sua vez, recebe dois parâmetros: um acumulador e o elemento atual que está percorrendo.

Estrutura:

array.reduce(function(acumulador, elemento){
    definimos o comportamento que queremos implementar sobre o acumulador e o elemento
});
*/

// Exemplo:

let numeros1 = [5, 7, 16];

let soma = numeros1.reduce (function (acumulador, numero) { //  (function (acumulador, numero) - callback - receberá dois parâmetros.
    // O acumulador é o ultimo item retornado, e o numero, o elemento atual do array.
    return acumulador + numero; // 5 -> 5 + 7 = 12 -> 12 + 16 = 28
});

console.log(soma); // 28

/* FOREACH
.forEach() - O objetivo deste método é iterar em um array.
Ele recebe uma callback como parâmetro e, ao contrário dos métodos anteriores, não retorna nada.

Estrutura:

array.forEach (function (elemento) {
    definimos o comportamento que queremos implementar sobre cada elemento
});
*/

// Exemplo:
// O método .forEach() irá exibir todos os elementos do array.
var paises = ['Brasil', 'Cuba', 'Peru'];

paises.forEach (function (pais) { // (function (pais) - callback - Esta função recebe um parâmetro, que representará cada elemento do array, neste caso, cada país.
console.log(pais);
});