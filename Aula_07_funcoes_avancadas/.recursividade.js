/* Aula 07 - Recursividade
17/06/2021*/

// RECURSIVIDADE: se aplica quando uma função invoca ela mesma. É muito utilizado para chamar a mesma tarefa várias vezes, parecido com um loop (ciclo).
// Uma função recursiva sempre precisa ter uma condição que vai parar de invocar ela mesma, caso contrário ela se chamará infinitamente.

// Estrutura:
/* 
function recursividade () {
    if (condicao) {
        // ...
    } else {
        recursividade ()
    }
}
*/

// Exemplo:

function decrementar (numero) {
    console.log (numero)
    numero--
    if(numero > 0) {
        decrementar (numero)
    }
}

decrementar(3);