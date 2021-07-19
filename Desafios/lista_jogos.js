// NOME DO DESAFIO: LISTA DE JOGOS
//
// desafio: você deve criar uma FUNÇÃO que receba como ARGUMENTO uma STRING.

// a FUNÇÃO deverá buscar no ARRAY "games" todos os OBJETOS cujo atributo "genre" 
// corresponda à string fornecida e retornar um array contendo SOMENTE o nome de cada
// um dos jogos encontrados.
//
// pontuação: 3 pontos
//
// regras adicionais:
// 1. o uso do método "filter" dará 1 ponto adicional
// 2. a possibilidade do fornecimento de uma quantidade indefinida de gêneros como argumento,
//    com o retorno de todos os jogos de todos os gêneros fornecidos dará 1 ponto adicional

function listaJogos (genero) {
  let games = [ 
    {nome:'A', genero: 'ação'},
    {nome:'B', genero: 'esportes'},
    {nome:'C', genero: 'rpg'},
    {nome:'D', genero: 'puzzle'},
    {nome:'E', genero: 'estratégia'}
  ]
}

console.log (listaJogos('ação'));

// const listaFiltrados = games.filter(jogo => jogo.genero == '')

// console.log (listaFiltrados);

