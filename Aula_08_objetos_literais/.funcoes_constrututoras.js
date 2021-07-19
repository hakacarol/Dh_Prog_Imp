/* Aula 08 - Objetos
22/06/2021*/

// FUNÇOES CONSTRUTORAS: A função construtora nos permite montar um molde, e então criar todos os objetos de que precisamos.
// A função recebe um parâmetro para cada propriedade que queremos atribuir ao objeto.

// Exemplo:
function Carro (marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
};


// Instaciar um OBJETO: A função construtora Carro() espera dois parâmetros: marca e modelo. 
// Para criar um objeto Carro, devemos usar a palavra-chave new e chamar a função passando os parâmetros esperados.
// o método new para criar um objeto, o que ele retorna é uma instância, ou seja, na variável meuCarro teremos uma instância do objeto Carro armazenada. Usando a mesma função construtora, podemos instanciar quantos carros quisermos.
let meuCarro = new Carro('Ford', 'Falcon');
let outroCarro = new Carro('Chevrolet', 'Corvette');

console.log(meuCarro.marca);

// Nome: Definimos um nome para a função, que será o nome do nosso construtor.
// Por convenção, geralmente nomeamos funções construtoras com a primeira letra maiúscula. Isso é para diferenciá-los das funções normais.

// Parâmetros: Definimos o número de parâmetros que consideramos necessários para criar nosso objeto.
// Todos os parâmetros serão obrigatórios para criar o objeto, a menos que definamos de outra forma.

// Propriedades: Com a notação this.propriedade definimos a propriedade do objeto que estamos criando naquele momento.
// Em geral, os valores das propriedades serão aqueles que vêm por meio dos parâmetros.