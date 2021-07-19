/* Aula 07 - Callbacks 
17/06/2021*/

// CALLBACKS: é uma função que é passada como parâmetro para outra função.
// A função que a recebe é responsável por executá-la quando necessário.


const somar = (numeroA, numeroB) => numeroA + numeroB;

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB)

console.log(calculadora(10, 20, somar))

// Função anônima
console.log(calculadora(10, 20, (numeroA, numeroB) => numeroA-numeroB))