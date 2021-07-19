/*Objetos literais

Exercício 1 - “Conta bancária"

Defina um novo objeto ‘conta’ que contenha as seguintes propriedades:

Número de conta
Saldo
Nome do Titular



Crie uma função construtora de nosso objeto de conta.
Instancie os objetos com diferentes valores iniciais e teste os métodos.

Exercício 2 - “Calcular notas”
Crie o objeto de aluno, que consistirá nas seguintes propriedades básicas:

Nome
Número do arquivo
Lista de notas
Gostaríamos de calcular a média do aluno e se o aluno foi aprovado com base na nota de aprovação que será dada. Para este exercício, vamos deixar você pensar sobre todos os métodos e propriedades que podem ser necessários para que nosso programa funcione corretamente da maneira solicitada.*/

//Exercício 1 - “Conta bancária"

/*Crie um método chamado ‘depósito’ que tem a quantidade de dinheiro como parâmetro de entrada.
Ao fazer um depósito, a quantia em dinheiro deve ser adicionada ao saldo existente. O método também deve imprimir na tela o tipo de transação realizada e o novo saldo.*/

/*Crie um novo método chamado saque, como o método de depósito, deve consistir em um parâmetro numérico que será a quantia de dinheiro que queremos sacar. Esta quantia será subtraída do saldo existente. Caso o valor do saque seja superior ao saldo disponível, deve-se imprimir na tela a mensagem “Fundos Insuficientes”, caso contrário deve-se imprimir o tipo de transação realizada e o novo saldo.*/

let conta = { // Defina um novo objeto ‘conta’ 
    numeroDeConta: '12345-6',
    saldo: 20000.00,
    nomeDoTitular: 'Marco Aurélio Vidoti'
}

let deposito = function (quantidadeDeDinheiro, tipoTransacao) {
    console.log(quantidadeDeDinheiro, tipoTransacao); // "efeito colateral"
    var saldoDeposito = conta.saldo + quantidadeDeDinheiro
    console.log(saldoDeposito); // "efeito colateral"
        return 'Transação via ' + tipoTransacao + ' de ' + quantidadeDeDinheiro + ' reais.' + ' ' + 'Saldo atual: ' + saldoDeposito + ' reais.'
}

var mensagemDeposito = deposito (10, 'ted');
var valorTotal = conta.saldo + letdeposito(quantidadeDeDinheiro)
console.log(mensagemDeposito);
console.log(valorTotal);

let saque = function (valorSaque, saldoDeposito) {
    console.log(conta.saldo, saldoDeposito); // "efeito colateral"
    if (valorSaque > conta.saldo + saldoDeposito) {
        return 'Fundos Insuficientes'
    } else {
        return 'Transação realizada com sucesso! Seu saldo atual: ' + this.saldo
    }
}

console.log(saque);
//ou


// let conta2 = { // Defina um novo objeto ‘conta’ 
//     numeroDeConta: '12345-6', // propriedades
//     saldo: 0 +
//     nomeDoTitula: 'Marco Aurélio Vidoti',
//     deposito: function (quantidadeDeDinheiro, tipoTransacao) {
//         console.log(quantidadeDeDinheiro, tipoTransacao); // "efeito colateral"
//         return 'Transação via ' + tipoTransacao + ' de ' + quantidadeDeDinheiro + ' reais.' + ' ' + 'Saldo atual: ' + (this.saldo + quantidadeDeDinheiro) + ' reais.'},
//     saque: function (valorSaque) {
//         if (valorSaque > this.saldo) {
//             return 'Fundos Insuficientes'
//         } else {
//             return 'Transação realizada com sucesso! Seu saldo atual: ' + this.saldo
//         }
//     }
// }


// console.log(conta2.deposito (100000, 'credito'));
// console.log(conta2.saque (5));


// Exercício 2 - “Calcular notas”