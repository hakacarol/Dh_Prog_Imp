// importarCalculadora.js
// fora da pasta Modulo

const operacoes = require('./modulos/exportarCalculadora');

function calcular (a, b, acao) {
    switch (acao) {
        case '+' : console.log (operacoes.somar(a, b));
        break;
        case '-': console.log (operacoes.subtrair(a, b));
        break;
        case '*': console.log (operacoes.multiplicar(a, b));
        break;
        case '/': console.log (operacoes.dividir(a, b));
        break;
        default: console.log('Digite uma opção válida')
    }
}
calcular('olá', 5, '*');