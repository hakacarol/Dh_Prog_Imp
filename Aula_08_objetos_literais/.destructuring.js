/* Aula 08 - Desestruturação
22/06/2021*/

// DESTRUCTURING: A Desestruturação é uma maneira simples e eficiente de extrair valores de arrays e objetos.
// A desestruturação não modifica o array ou objeto literal de origem.
// Seu único objetivo é copiar os valores de forma mais prática e rápida.

// Na forma mais convencional, para extrair dados de um array:

let cores = ['Roxo', 'Azul', 'Amarelo']
let azul = cores[1]

console.log(azul);

// Para extrair dados de um objeto, é necessário criar uma variável e atribuir-lhe uma propriedade específica para esse objeto.

let carro = { marca: 'Ford', ano: 1998};
let marca = carro.marca

console.log(marca);

// Utilizando Desestruturação 
// Para desestruturar um ARRAY, declaramos uma variável (podemos usar var, let ou const), e entre colchetes, escrevemos o nome que queremos. Podemos declarar mais de uma variável, separando cada uma com uma vírgula ,.

let array = ['Roxo', 'Azul', 'Amarelo']
let [cor1, cor2, cor3] = array;

console.log(cor1);

// Se quisermos saltar um valor, podemos deixar vazio o nome da variável que corresponderia a essa posição.
// let [cor1, , cor2] = array;

// Para desestruturar um OBJETO LITERAL, criamos uma variável (podemos usar var, let ou const), e entre chaves, declaramos o nome ou nomes das propriedades que queremos extrair.

let pessoa = {
    nome: 'Laura', 
    idade: 31, 
    faltas: 3
};

// let nome = pessoa.nome; // maneira convencional 
let {nome, idade} = pessoa;

console.log(nome)

// É possível que em alguns casos, iremos precisar mudar o nome da variável que estamos criando.
// Nesse caso, após a propriedade que estamos extraindo, colocamos dois pontos : seguido do novo nome.

let pessoa1 = {
    nome1: 'Laura',
    idade: 31, 
    faltas: 3
};

let {nome1, faltas: totalFaltas} = pessoa1;

console.log(nome1);

// totalFaltas: Nome novo
