/*Exercício Arrays

Objetivo

Vamos fixar nosso conhecimento sobre Arrays explorando diferentes comandos sobre ele.
Veremos se eles se comportam como esperamos ou se ocorrem resultados inesperados.

Em primeiro lugar, vamos praticar os comandos mais comuns e necessários:

Acesse elementos específicos de um array.
Percorra um Array  e modifique cada um de seus elementos.
Adicione elementos a um array.
Exclua elementos de um array.
Compare elementos de um array com elementos de outro array. 

Micro Desafios
O líder técnico da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
*/

// 1. Criar um arquivo arrays.js que contenha o código:

let filmes1 = ["star wars", "clube da luta", "o poderoso chefao", "top gun", "interestelar"]

console.log(filmes1);

console.log(filmes1[1]); // Verificamos se tudo funciona bem se solicitarmos o segundo elemento do array e for "clube da luta".


// Matheus - exemplo
let filmes = ["star wars", "clube da luta", "o poderoso chefao", "top gun", "interestelar"].map(e => e.toUpperCase());
console.log(filmes);

let valorProduto = [1000, 550, 300].map(e => e*0.9).filter(e => e>600);
console.log(valorProduto);

function map (e) {
    return e.toUpperCase;
}

for (let i=0; i<filmes.length; i++) {
    filmes[i] = filmes[i].toUpperCase();
}

console.log("-------------------------------------");

// 2. No mesmo arquivo, coloque todos os elementos em letras MAIÚSCULAS utilizando  .toUpperCase() para cada elemento.

console.log(filmes.map (function (filmeUpper) { // map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
    return filmeUpper.toUpperCase();
})); 

filmes.forEach (function (caps, nomesFilmes) { //forEach função q não tem retorno, diferente do map
    filmes [nomesFilmes] = caps.toUpperCase();
});

console.log(filmes);

// 3.Enquanto trabalhava no exercício 2, descobrimos que também há outro array no código, mas com filmes animados. 
let cartoons = ["toy story", "procurando nemo", "kung-fu panda", "wally", "fortnite"]

console.log(cartoons);

//
function add() {
    cartoons.forEach (e => console.log(e))
}

// 4.No mesmo arquivo, crie este array e uma função que adiciona cada elemento do array de desenhos animados (cartoons) ao array de filmes.
function somaFilmes () {
    return filmes + cartoons
}

console.log(somaFilmes());

console.log("-------------------------------------");

// 5.Um dos desenvolvedores avisou que a última animação é na verdade um jogo,
// então remova esse último elemento do array de desenhos animados (cartoons) antes de passá-los para os filmes.
cartoons.pop();

console.log(cartoons);

console.log("-------------------------------------");

/* 6. Por fim, eles nos enviam dois arrays com as avaliações feitas por diferentes usuários do mundo desses filmes, da seguinte forma:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9]; 

Eles nos pedem para criar uma função que compare as notas e nos diga se elas são iguais ou diferentes. Eles confirmam que estão na respectiva ordem e que trazem apenas valores numéricos de 1 a 10.
Para verificar se tudo está bem até agora, recomendamos testar cada uma das funções e testar seu funcionamento correto.

Se chegarmos a este ponto e tudo estiver bem, o líder técnico da equipe deve estar extremamente feliz com nosso trabalho e desempenho. Bom trabalho!

Até a próxima!
*/

// Por fim, eles nos enviam dois arrays com as avaliações feitas por diferentes usuários do mundo desses filmes, da seguinte forma:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9];

// Eles nos pedem para criar uma função que compare as notas e nos diga se elas são iguais ou diferentes. 
// Eles confirmam que estão na respectiva ordem e que trazem apenas valores numéricos de 1 a 10.

const a = 7;
const tamanho1 = asiaScores.length
const tamanho2 = euroScores.length

// console.log(tamanho1) // variável auxiliar

for (let i=0; i<tamanho1; i++) {
    if (asiaScores[i] == euroScores[i]) {
        console.log('iguais')
} else {
        console.log('desiguais')
}};

// comparando as arrays
var b = 0

for (let i=0; i<tamanho1; i++) {
    if (asiaScores[i] == euroScores[i]) {
        b = b + 1   
}};

// console.log(b);

if (b == tamanho1) {
    console.log('são iguais')
} else {
    console.log('são diferentes')
};
