/* Aula 07 - Closures
17/06/2021*/

// CLOSURES: são funções aninhadas, ou seja, funções que vivem dentro de outras funções.

// Um closure (fechamento) reside dentro de uma função container e só será usado unicamente quando essa função for executada.
// Assim que a execução for concluída, a closure deixará de existir, otimizando assim o desempenho geral, deixando seu espaço de memória disponível para outras solicitações.

/* Estrutura:
function container () {
    function interna () {
    //código a executar
    } //código a executar
}
*/

function saudacaoPersonalizada (nome) {
    let saudacaoGenerica = 'Olá';
    function saudar () {
        return saudacaoGenerica + ' ' + nome;
    }
    return saudar ();
}

console.log(saudacaoPersonalizada('Carol'));