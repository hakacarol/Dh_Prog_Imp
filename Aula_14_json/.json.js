/*
Json: É um formato de texto simples usado
para trocar dados entre diferentes
sistemas.

JSON é o acrônimo de JavaScript Object Notation e, como seu nome indica, é
muito similar ao objeto literal que já conhecemos. 

Objeto Literal

- Admite aspas simples e duplas. 
- As chaves do objeto não usam aspas.
- Podemos escrever métodos sem problemas.
- Recomenda-se colocar uma vírgula na última propriedade.

JSON

- Apenas aspas duplas podem ser usadas.
- As chaves estão entre aspas.
- Não suporta métodos, apenas propriedades e valores.
- Não podemos colocar uma vírgula no último elemento.

JSON.parse()

Converte um texto com formato JSON ao tipo de dado equivalente em JavaScript.
● Recebe uma string de texto com formato JSON;
● Devolve o mesmo dado que recebeu em formato JavaScript.
*/

let dadosJson = '{"cidade": "São Paulo", "bairro": "Morumbi"}';
let dadosConvertidos = JSON.parse(dadosJson);

console.log(dadosConvertidos); // Será visto no console um objeto literal / { cidade: 'São Paulo', bairro: 'Morumbi' }

/*
JSON.stringify()

Converte um tipo de dado de JavaScript em um texto em formato JSON.
● Recebe um tipo de dado de JavaScript;
● Devolve uma string de texto com formato JSON.
*/

let objetoLiteral = { nome: 'Carla', pais: 'Brasil' };
let dadosConvertidos1 = JSON.stringify(objetoLiteral);

console.log(dadosConvertidos1); // Será visto no console os dados em uma string do tipo JSON / '{ "nome": "Carla", "pais": "Brasil" }'

/*
.readFileSync()
.writeFileSync()
.appendFileSync()

* estudar!!!*
*/

