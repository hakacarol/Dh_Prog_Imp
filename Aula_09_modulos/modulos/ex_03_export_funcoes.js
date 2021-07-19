// objetico criem funções de calculo e exportem
// dentro da pasta modulo
// exfuncçoes

// ex03exp


function somar(n1,n2) {
    return n1+n2;
}

function subtrair(n1,n2) {
    return n1-n2;
}

function multiplicar(n1,n2) {
    return n1*n2;
}

function dividir(n1,n2) {
    return n1/n2;
}

module.exports={somar, subtrair, multiplicar, dividir};