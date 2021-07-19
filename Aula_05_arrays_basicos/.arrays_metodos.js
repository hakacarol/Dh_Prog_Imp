/* Aula 05 - Arrays
11/06/2021*/

// ARRAYS: armazena uma coleção de elementos, de modo que cada um deles pode ser identificado por um índice ou uma chave.
// São geralmente descritas como "lista de objetos"
// Esta estrutura também é conhecida como variável indexada, vetor (unidimensional) ou matriz (no caso de ser multidimensional).

//Push: adiciona os elementos de uma array no final
let cores = ["Azul", "Branco", "Vermelho", "Verde"]

cores.push("Violeta", "Amarelo")
console.log(cores); // imprimi todas as cores
console.log(cores[5]) // imprimi o resultado do 5 elemento

//Pop: remove o último elemento de uma array e retorna o elemento eliminado
let nomes = ["Ana", "Carol", "João"]
let oUltimo = nomes.pop()

console.log(nomes); // imprimir o resultado com o pop
console.log(nomes.length); // imprimir a quantidade de elementos da array
console.log(oUltimo); // imprimi o valor do elemento eliminado pelo pop

//Shift: remove o primeiro elemento e retorna o elemento eliminado
let nomes1 = ["Ana", "Carol", "João"]
let oPrimeiro = nomes1.shift()

console.log(nomes1); // imprimir o resultado com o pop
console.log(nomes1.length); // imprimir a quantidade de elementos da array
console.log(oPrimeiro); // imprimi o valor do elemento eliminado pelo shift

//Unshift: adiciona um ou mais elementos na array no começo
let cores1 = ["Azul", "Branco", "Vermelho", "Verde"]

cores1.unshift("Violeta", "Amarelo")

console.log(cores1); // imprimi todas as cores
console.log(cores1[1]); // imprimi o resultado do 1 elemento

//Join: unir todos os elementos presentes em uma array, pode adicionar um separador (string) e e retorna como string
let diasEntreSemana = ["segunda", 2, "quarta", "quinta", "sexta"]

console.log(diasEntreSemana.join(" - "));

//IndexOf: encontrar a posição - ser sair negativo é porque não está na lista (perguntar o índice de ocorrência de um elemento)
let cores2 = ["Azul", "Branco", "Vermelho", "Verde", "Vermelho"]

console.log(cores2.indexOf("Vermelho"));
console.log(cores2.indexOf("blablabla"));

//LastIndexOf: encontra o elemento final de trás para frente
console.log(cores2.lastIndexOf("Vermelho"));

//Includes: similar ao .indexOf, retorna um booleano
{let cores = ["Azul", "Branco", "Vermelho", "Verde"]

console.log(cores.includes("Verde"));
console.log(cores.includes("Roxo"));
}