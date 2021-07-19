/* Aula 12 - Métodos de Arrays - forEach
06/07/2021*/

// forEach = para cada um elemento
// O forEach() é um método chama uma função uma vez para cada elemento em uma array.

let pizza = ['pedaço1', 'pedaço2', 'pedaço3', 'pedaço4'];

pizza.forEach (
    function (pedaco) {
        console.log(pedaco)
    }
)

console.log(pizza);