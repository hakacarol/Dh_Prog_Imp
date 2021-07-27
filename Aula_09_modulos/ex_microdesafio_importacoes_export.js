/* Exercício “Importações”
Objetivo
Entender a implementação e funcionamento das importações e exportações de módulos.
Micro desafios

Crie um módulo que exporte uma função (em um arquivo separado). Após isso, importe o módulo no arquivo principal e execute a função importada.*/

// Criando uma funcao qualquer:
const somar = function (a, b) {
    return `A soma é igual: ${a + b}`
}

// console.log(somar(10, 3));

// Criando módulo para exportação
module.exports = somar;