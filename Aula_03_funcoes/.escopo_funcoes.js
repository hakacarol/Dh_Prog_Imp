/* Aula 03 - Escopos
01/06/2021*/

// O escopo (scope) se refere ao alcance que uma variável tem, ou seja, de onde podemos acessá-la. No JavaScript, os escopos são definidos principalmente pelas funções.

// Escopo local: No momento que declaramos uma variável dentro de uma função, esta passa a ter alcance local. Ou seja, essa variável existe unicamente dentro desta função.
// function ola () {
//     let bemvindo = 'Olá, como vai?';
//     return bemvindo;
// }

// console.log(bemvindo); // bemvindo is not defined

// Escopo global: No momento que declaramos uma variável fora de qualquer função, ela passa a ter escopo global.
let bemvindo = 'Olá, como vai?';
function ola() {
return bemvindo;
}

console.log(bemvindo);