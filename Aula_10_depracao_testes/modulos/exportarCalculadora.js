/* Aula 10 - Objetos
22/06/2021*/

module.exports = {
    somar: (a, b) => { //soma: propriedade
        if (typeof a == 'number' && typeof b == "number") {
            return a + b;
        } else { 
            return 'Favor informar numeros!'}
    },
    subtrair: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => {
        if (b != 0) {
            return a / b
        } else {
            return 'impossível dividir por 0!!'
        }
    }
}