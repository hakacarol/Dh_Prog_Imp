// Aula 15 -Promises - 20/07/2021

/* 
1) O que são Promises?

Um objeto JS que vincula:
- A produção do código.
- O consumo de código.
*/

// Passo 3
function meuVerificador (resposta) {
    console.log(resposta);
}

// Passo 1
let minhaPromessa = new Promise (
    function(Resolve, Reject) {
        let x = 1;
        if (x == 0) {
            Resolve('Tudo Ok');
        } else {
            Reject ('Deu erro');
        }
    }
)

// Passo 2
minhaPromessa.then( 
    function(Resolve) {
        meuVerificador(Resolve);
    }).catch((Reject) => {
        console.log(Reject)
    }
);