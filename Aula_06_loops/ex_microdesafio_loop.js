// Exercícios de loop.

// Objetivo
// Vamos revisar as diferentes sintaxes e possibilidades de loop em JS.
// Lembre-se que cada resposta pode ser diferente. O que será observado é a correta aplicação dos conhecimentos adquiridos no curso.

// Micro desafios - Passo I

// Execute essas ações simples e comumente usadas para trabalhar com loops e arrays.

// 1.Percorra o array abaixo e exiba seus elementos:
const pontos = [12, 34, 56, 34, 5, 8, 76, 4, 1, 90]

pontos.forEach (function (numeros) {  // forEach: permite executar uma função para cada item de um array.
    console.log(numeros) // Percorra-o
});

console.log ("--------------------------------------------------");

// 2.Crie um array com valores diversos, percorra-o, altere e mostre seus elementos:
let pessoa = ["Carolina", 31, "amarelo", 1.66] // Array com valores diversos
pessoa.forEach (function (pessoa) {
    console.log(pessoa) // Percorra-o
});

pessoa.push ("desenhar"); // Altere (push)
console.log (pessoa); // Mostre seus elementos

console.log ("--------------------------------------------------");

// 3.Crie outro array, percorra-o, altere, salve e exiba seus elementos:
// Obs: Neste exercício, utilize funções e domínios separados, ou seja, salvar é uma coisa e exibir é outra. Sendo assim, nem tudo deve ser feito junto.
let animais = ["cachorro", "gato", "coelho", "cobra"] // Crie outro array
animais.forEach (animais => console.log(animais)) // Percorra-o

let removeUltimo = animais.pop(); // Altere (pop)
console.log(animais); // Imprime todos os animais menos o que foi removido pelo pop
console.log(animais.length); // Imprime o tamanho da Array
console.log (removeUltimo); // Imprime o animal excluído

animais.forEach (animais => console.log(animais)) // Salve e exiba

console.log ("--------------------------------------------------");

// 4.Crie um último array, percorra-o, selecione os elementos, salve e mostre-os:
let comida = ["batata-frita", "hamburguer", "nuggets", "tortinha de maça"] // Crie outro array
comida.forEach (comida => console.log(comida)) // Percorra-o

console.log(comida[1]);
console.log ("--------------------------------------------------");

// 1) Escrever um programa que imprime 25 termos da série 11 - 22 - 33 - 44, etc. 
// 2) Mostrar os múltiplos de 8 até o valor 500. A tela deve mostrar 8 -16 -24;
// 3) Usando FOR, desenvolver um programa que mostre a tabuada de 5.
