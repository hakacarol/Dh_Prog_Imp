// Objetivo

// Vamos calcular o número fatorial de um valor inteiro.

// Micro desafios - Etapa I

// O tech leader da equipe precisa criar um código onde seja calculado o número fatorial de um valor inteiro. Para isto, deveremos:

// Criar uma função que calcula o fatorial usando loop (for);

let a = 3
var fatorial = 1 // usar var quando variavel for atualizada / valor = 1 usado como refêrencia

for (i=a; i>=1; i--) {
    fatorial = fatorial * i 
}

console.log(fatorial);

// ou

function fatorial1 (n) {
    var result = 1;
    for (var i = n; i > 1; i--) {
        result = result * i;
    }
    return result;
}

console.log(fatorial1 (6));

// Recriar esta mesma função usando recursividade (sem o uso de for) 
function fatorialRec (n) {
    if (n === 0)
    return 1;
    if (n === 1)
    return 1;
    return n * fatorialRec (n-1);
}

console.log(fatorialRec (4));
