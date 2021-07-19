/* Aula 04 - Calculadora
08/06/2021*/

// Soma
let somar = function(n1,n2) {
    return n1+n2;
}

console.log(somar(10,10));

// Subtrair
let subtrair = function(n1,n2) {
    return n1-n2
}

console.log(subtrair(10,10));

// Multiplicar
let multiplicar = function(n1,n2) {
    return n1*n2
}

console.log(multiplicar(10,10));

// Dividir
let dividir = function(n1,n2) {
    //verificar se n2 == 0
    if(n2==0) {
        // executar se for true
        return 'Nunca dividirás por 0, caro amigo';
    } else {
        return n1/n2;
    }
}

console.log(dividir(10,0));