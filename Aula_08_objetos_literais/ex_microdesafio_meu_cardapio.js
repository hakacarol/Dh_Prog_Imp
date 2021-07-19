// 22/06
// Exercício “Meu cardápio”

// Objetivo

// Entender a implementação de objetos e funções construtoras.

// Micro desafios

// Crie uma função construtora chamada Restaurante, que receba como parâmetros o nome do restaurante e o cardápio (que será um array de strings).
// Após isso chame a função entrada() dentro do objeto, que irá trazer uma mensagem de boas-vindas, informando o nome do restaurante, e o cardápio.

// let nomeRestaurante = 'Bullguer'
// let cardapioRestaurante = ['Smash Club' , 'Standard', 'Lumberjack', 'Crinkles']


// function Restaurante (nome, cardapio) {
//     this.nome = nomeRestaurante
//     this.cardapio = cardapioRestaurante
//         return 'Bem vindo ao ' + this.nome + ' esse é o nosso cardápio ' + this.cardapio 
//     };

// console.log(Restaurante()); 


let nomeRestaurante = 'Bullguer'
let cardapioRestaurante = ['Smash Club' , 'Standard', 'Lumberjack', 'Crinkles']


function Restaurante (nome, cardapio) {
    this.nome = nomeRestaurante
    this.cardapio = cardapioRestaurante
    this.entrada = function () {
        return 'Bem vindo ao ' + this.nome + '!' + ' Este é o nosso cardápio: ' + this.cardapio  
    }
};

let restauranteNovo = new Restaurante (this.nome, this.cardapio);

console.log(restauranteNovo.entrada()); 





