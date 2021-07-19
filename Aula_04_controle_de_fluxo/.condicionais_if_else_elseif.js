/* Aula 04 - If
08/06/2021*/

// CONDICIONAIS: são estruturas de decisão, que com base em UMA CONDIÇÃO, podem realizar certas tarefas.
// São muito úteis caso tenhamos que realizar uma tarefa, quando uma condição for suprida.

// Condicional Simples: Versão mais básica do IF.
// Estabelece uma condição e um bloco de código que será executado em caso de a condição ser verdadeira.
if (condicao) {
// código a executar se a condição for verdadeira
}

// Condicional com o bloco ELSE: Igual ao exemplo anterior, mas acrescenta um bloco de código que será executado em caso de a condição ser falsa.
// É importante ter em mente que o bloco else é opcional.
if (condicao) {
// código a executar se a condição for verdadeira
} else {
// código a executar se a condição for falsa
}

// Condicional com o bloco else if:  Igual ao exemplo anterior, mas acrescenta um if adicional. 
// Ou seja, outra condição que pode ser avaliada em caso de a primeira ser falsa.
// Podemos adicionar todos os blocos else if que quisermos, mas apenas um     poderá ser verdadeiro. Senão, o bloco else entrará em ação, se existir.
if (condicao) {
    // código a executar se a condição for verdadeira
} else if (outraCondicao) {
    // código a executar se a outra condição for verdadeira
} else {
    // código a executar se todas as condições forem falsas
}
    
// Exemplo:

let idade = 14;
let acesso = '';

if (idade < 16) {
    acesso = 'Acesso proibido';
} else if (idade >= 16 && idade <= 18) {
    acesso = 'Acesso liberado somente com acompanhante maior de idade';
} else {
    acesso = 'Acesso liberado';
}

console.log(acesso);