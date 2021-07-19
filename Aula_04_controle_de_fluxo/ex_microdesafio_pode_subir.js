// Exercicío - If, else if e else -> resolvido por function
// Operador de negação "!"

/* Exercício “Pode Subir”

Objetivo
Vamos determinar em que momento fazer uso de uma estrutura condicional.
Microdesafios

Em um parque de diversões nos pedem um programa para verificar se os passageiros da montanha-russa podem entrar no brinquedo.

Crie uma função podeSubir() que receba dois parâmetros: 
altura da pessoa;
se está acompanhada.

Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode subir ou não, baseado nas seguintes condições:
A pessoa deve medir mais de 1.40m e menos de 2 metros.
Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada.

Modifique a função podeSubir(), de modo que ela exiba uma mensagem de autorização
ou de impedimento no acesso ao brinquedo dependendo se a pessoa se enquadra ou não nas condições do exercício anterior.
Por exemplo:
Em caso de autorização, exiba a mensagem: “Acesso autorizado” ou “Acesso autorizado somente com acompanhante”;
Em caso de impedimento, exiba a mensagem: “Acesso negado.”
*/

let altura = 1.30
let acompanhada = 'sim'

function podeSubir (altura) {
    if (altura > 1.40 && altura < 2.00) {
        return 'Pode subir! :)'
    } else if (altura >= 1.20 && altura <= 1.40 && acompanhada == 'sim') {
        return 'Pode subir, está acompanhada.'
    } else if (altura >= 1.20 && altura <= 1.40 && acompanhada == 'não') {
        return 'Não pode subir, não está acompanhada.'
    } else {
        return 'Acesso negado, altura mínima de 1.20 m'
    }
}

resultado = podeSubir (altura, acompanhada);
console.log(resultado);


// Resultado do exercício feito em grupo:

// function podeSubir (altura, acompanhada) { // Crie uma função podeSubir(), dois parâmetros
//     if (altura > 1.4 && altura < 2){
//         return "Pode subir"

//     } else if (altura >= 1.2 && altura < 1.4 && acompanhada == "sim" ) {
//         return "Pode subir por estar acompanhada"

//     } else if (altura >= 1.2 && altura < 1.4 && acompanhada == "não") {
//         return "Necessita de acompanhante para subir"

//     } else {
//         return "Não pode subir"
//     } 
// }

// console.log(podeSubir(1.2,"não"))

