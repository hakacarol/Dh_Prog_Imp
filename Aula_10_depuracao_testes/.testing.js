/* Aula 10 - Testing
29/06/2021*/

// TESTES: Os testes são processos que criamos para validar nosso código, com o intuito de confirmar se a nossa aplicação está funcionando corretamente.

// Mocha: Mocha é um framework Node para criação de testes. https://mochajs.org/api/index.html
// Chai: Chai é uma biblioteca que permite gerar um ponto de teste para Javascript. https://wwww.chaijs.com/guide/

// IT E EXPECT

// IT :utilizamos para cada teste que queremos fazer;
// EXPECT: é o teste lógico que nosso código irá executar, neste caso, verifica se existe uma variável.

it ("Declara variável numeroA", function() {
    const numeroA = check('variableDeclaration', 'numeroA')
    expect(numeroA.exists).to.be.true
});
