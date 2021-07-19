/* Aula 04 - Switch
08/06/2021*/

// SWITCH nos oferece uma sintaxe mais legível para os casos em que queremos AVALIAR MUITAS POSSIBILIDADES DE UM ÚNICO VALOR.
// O switch é composto por um valor a ser avaliado, seguido de diferentes CASES.
// Podemos adicionar quantos quisermos, cada um contemplando um cenário diferente.
// Cada case deve terminar com a palavra-chave BREAK para evitar que o próximo bloco seja executado.

/* Estrutura:

switch (valor) {
    case valorA:
        // código a ser executado se a expressão for igual a valorA.
        break;
    case valorB:
        // código a ser executado se a expressão for igual a valorB.
        break;
}
*/

// Exemplo:

let idade = 10;

switch (idade) {
    case 10:
        console.log('Tem 10 anos');
        break;
    case 5:
        console.log('Tem 5 anos');
        break;
}

// Agrupamento de casos: O switch também nos permite agrupar casos e executar o mesmo bloco de código para qualquer caso naquele grupo.

/*
switch (valor) {
    case valorA:
    case valorB:
        // código a ser executado se a expressão for igual a valorA ou valorB.
        break;
    case valorC:
        // código a ser executado se valorC for verdadeiro
        break;
}
*/

// O bloco Default: Se quisermos considerar a possibilidade de que nenhum dos casos seja verdadeiro
// Usamos a palavra-chave default seguida por dois pontos : e o bloco de código que queremos executar.
// Normalmente escrevemos o bloco default por último. Nesse caso, não é necessário escrever a palavra reservada break.

/*
switch (valor) {
    case valorA:
        // código a ser executado se valorA for verdadeiro.
        break;
    default:
        // código a ser executado se nenhum dos casos for verdadeiro.
}
*/

// Exemplo:

let fruta = 'banana';

switch (fruta) {
    case 'banana':
        console.log('Uma fruta amarela');
        break;
    case 'laranja':
        console.log('Bem ácida!');
        break;
    default:
    console.log('Qual fruta é?');
    break; // nã há a necessidade de colocar break no default
}