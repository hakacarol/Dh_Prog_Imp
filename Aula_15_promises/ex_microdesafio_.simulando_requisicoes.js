/*Exercício “Simulando requisições”

Objetivo
Entender o contexto de utilização e criação de Promises.

Micro desafio

1. Crie uma variável global chamada promiseFail, que será um booleano.
Após isso, crie uma Promise, que deverá retornar uma mensagem de
erro ou um JSON com base em promiseFail.

Trate ambas as possíveis respostas com os métodos adequados da
Promise, exibindo seus valores.

No caso do JSON, o transforme em objeto.

OBS: Cada aluno pode criar uma solução diferente, com conteúdos
diferentes. O que será analisado aqui é se os itens pedidos no
enunciado foram atendidos.
*/

// Criação de uma variável global com valor de um booleano
var promiseFail = false

// Dados qualquer dentro de uma constante
const dados = {
    nome: "Maria da Silva",
    cpf: 33820150801
}

// Criação de uma Promise
const minhaPromessa = new Promise ((resolve, reject) => {
        if (promiseFail) {
            resolve(JSON.stringify(dados))
        } else {
            reject ('Ops... ocorreu um erro fatal!')
        }
    }
)

minhaPromessa.then( // quando a Promise é cumprida e um resultado é obtido, o then() entra em execução
    function(resolve) {
        console.log(resolve);
    }).catch((reject) => { // quando não, gera uma mensagem de erro
        console.log(reject)
    }
);
