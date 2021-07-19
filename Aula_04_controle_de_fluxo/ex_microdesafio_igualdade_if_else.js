/* Exercício: “Igualdade, if e else”

Objetivo

Entender como é a sintaxe de uma função condicional utilizando if/else e sinal de igualdade.
Microdesafios

Vamos brincar com as condições!

Crie uma variável chamada linguagem, que terá uma string atribuída a ela.
Em seguida, construa uma condicional if/else para que, se a variável estiver armazenando o valor "javascript",
ela deve imprimir no console, o texto: "Estou aprendendo". 
Contudo, caso a variável esteja armazenando qualquer outra linguagem, imprima "Aprenderei mais tarde".
*/

let linguagem = "javascript"; // Crie uma variável chamada linguagem, que terá uma string atribuída a ela.

if (linguagem == "javascript") { // construa uma condicional if/else para que, se a variável estiver armazenando o valor "javascript",
    console.log("Estou aprendendo :)") // imprimir no console, o texto: "Estou aprendendo".
} else { // caso a variável esteja armazenando qualquer outra linguagem
    console.log("Aprenderei mais tarde..."); //  imprima "Aprenderei mais tarde".
}