/* Aula 12 - Métodos de Arrays - Map
06/07/2021*/

//O map() é um método que cria uma nova matriz com os resultados da chamada de uma função para cada elemento da matriz

let letrasMinusculas = ['a','b' ,'c', 'd'];

let letraMaiusculas = letrasMinusculas.map ( 
    function maiscula (elemento) {
        return elemento.toUpperCase();
    }
);

console.log (letrasMinusculas);
console.log (letraMaiusculas);

// com Arrow function
let letrasMinusculas1 = ['a','b' ,'c', 'd'];
let letraMaiusculas1 = letrasMinusculas1.map (maiscula = elemento => elemento.toUpperCase())

console.log (letrasMinusculas1);
console.log (letraMaiusculas1);
