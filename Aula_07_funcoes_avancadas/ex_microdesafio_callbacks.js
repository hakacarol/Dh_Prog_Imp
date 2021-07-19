/*Exercício “Terceirizando funções”

Objetivo

Compreender a utilização das callbacks e suas aplicações.

Micro desafios

Crie uma função acaoCarro(), que receberá uma callback como parâmetro.
Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo
que o carro está andando – e parar() – deve exibir uma mensagem dizendo
que o carro parou.
Execute ambas as ações utilizando a função acaoCarro(), passando suas
ações como callbacks.
*/

function andar () {
    console.log("o carro está em movimento.")
};

function parar () {
    console.log("o carro parou.")
};

function acaoCarro(callback) {
    callback()
};


acaoCarro(andar);
acaoCarro(parar);

