/* Aula 12 - Métodos de Arrays - Reduce
06/07/2021*/

// reduce() é um método que percorre o array e retorna um unico valor.
// Ele acumula o resultado.

const numeros = [1, 2, -3, -5, 4, 0 , 7, 8, 9, 19];

let resultado = numeros.reduce (
    function (totalizador, elementoDoArray) {
        return totalizador + elementoDoArray;
    }
);

console.log(resultado);