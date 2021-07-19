/* Aula 08 - Objetos
22/06/2021*/

// OBJETOS: Objetos são representações de elementos físicos existentes no mundo real.
// Um objeto é uma estrutura de dados que pode conter propriedades e métodos.

// Estrutura: 
/*
let carro = {
    placa: 'ADF1238'
};

Propriedade Definimos o nome da propriedade do objeto.
Neste caso, a propriedade se chama: placa.

: Dois pontos, separa o nome da propriedade de seu valor.

Valor: Pode ser qualquer tipo de dado que conhecemos.
Neste caso, o valor é: ‘ADF1238’
*/

// Exemplo:
// Um objeto pode ter quantas propriedades quisermos. Se houver mais de uma, nós as separamos por vírgulas ,.
let tenista = {
    nome: 'Roger',
    sobrenome: 'Federer'
};

console.log(tenista.nome) // Roger
console.log(tenista.sobrenome) // Federer

// Método de um objeto: Uma propriedade pode armazenar qualquer tipo de dados.
// Se uma propriedade armazena uma função, diremos que é um método do objeto.

//Exemplo:
let tenista1 = {
    nome: 'Roger',
    idade: 38,
    ativo: true,
    saudacao: function() {
        return 'Olá, me chamo Roger';
    }
};

console.log(tenista1.saudacao()); // Olá, me chamo Roger

//This: A palavra-chave this se refere ao próprio objeto onde estamos, ou seja, o próprio objeto onde escrevemos a palavra.
// Com a notação this.propriedade acessamos o valor de cada propriedade interna daquele objeto.
let tenista2 = {
    nome: 'Roger',
    sobrenome: 'Federer',
    saudacao: function() { 
        return 'Olá, me chamo ' + this.nome;
    }
};

console.log(tenista2.saudacao()); // Olá, me chamo Roger