/* Exercío 1

Objetivo

Vamos testar os nossos conhecimentos em funções, realizando 4 exercícios práticos em Javascript.
Micro desafios - Etapa I

1) Criar a função calcularIndiceDeMassaCorporal que receba a altura em centímetros e o peso em quilogramas e calcule o IMC do usuário (peso / altura2).
Em seguida, execute a função testando diferentes valores.*/

let peso = 60;
let altura = 160;
let imc = (peso / (altura / 100) ** 2).toFixed(2);

function imcUsuario (peso, altura) { // Função declarada
    console.log(imc);
    return imc;
}

console.log(`O imc da altura ${altura} e peso ${peso} é de: ${imc}`);

// resultado = imcUsuario(); // Utilizo quando não coloco o console.log dentro da funação. Lembrando que o console.log é uma impressão do resultado.
// console.log(resultado)

/*2) Criar as 4 “function expression” (dentro de variáveis) básicas de uma calculadora:

Soma;
Subtração;
Multiplicação;
Divisão.

As 4 funções deverão receber dois parâmetros e retornar o resultado da operação matemática correspondente.*/

// Soma
let somar = function (n1, n2) {
    return n1 + n2;
}

console.log(somar(5,10));

// Subtrair
let subtrair = function(n1, n2) {
    return n1 - n2
}

console.log(subtrair(5, 10));

// Multiplicar
let multiplicar = function(n1, n2) {
    return n1 * n2
}

console.log(multiplicar(5, 10));

// Dividir
let dividir = function(n1, n2) {
    return n1 / n2
}

console.log(multiplicar(10, 5));

// 3) Criar as variáveis, nomeJogador, golsJogador, precoEmDolares.
// Depois, criar a função fazerGol que incremente a quantidade de gols do jogador em uma unidade e, em seguida, imprima em tela a mensagem “GOL!!!!!!!!!”.
// Além disso, incremente o valor do jogador em 10.000 dólares.
// Por conseguinte, teste a execução da função várias vezes e imprima em tela a nova quantidade de gols do jogador e o preço do jogador no mercado.

let nomeJogador = 'João';
let golsJogador = 5
let precoEmDolares = 5000

let fazerGol = function () { // função fazerGol
    golsJogador++ // incremente a quantidade de gols do jogador em uma unidade
    precoEmDolares = precoEmDolares + 10000 // incremente o valor do jogador em 10.000 dólares.
    console.log(nomeJogador, 'GOL!!!!!') // imprima em tela a mensagem “GOL!!!!!!!!!”.
    console.log('Quantidade de gols: ' + golsJogador) // imprima em tela a nova quantidade de gols do jogador
    console.log('Valor do Jogador: ' + precoEmDolares + ' dólares') // e o preço do jogador no mercado.
}

fazerGol(); // teste a execução da função várias vezes //1° gol
fazerGol(); // 2° gol

// 4) Criar a função hatTrick (expressão usada para dizer que um jogador fez 3 gols em uma mesma partida) que em seu interior execute três vezes a função fazerGol
// e, em seguida, aumente o valor do jogador em 10% a mais por ano em comparação com o valor atual.

let hatTrick = function () { // Criar a função hatTrick
    fazerGol() // 3° gol
    precoAnual = (precoEmDolares) + (precoEmDolares * 0.1) // aumente o valor do jogador em 10% a mais por ano em comparação com o valor atual.
    console.log('Valor anual do ' + nomeJogador + ' é de ' + precoAnual + ' dólares!!!')
}

hatTrick();