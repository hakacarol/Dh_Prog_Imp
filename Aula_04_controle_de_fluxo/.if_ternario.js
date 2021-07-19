/* Aula 04 - If Ternário
08/06/2021*/

// IF TERNÁRIO é uma variante de apenas uma linha do if comum.
// Não possue {}, nem as palavras if e else
// Com ela, é possível ter apenas duas opções de valor – que corresponde ao if else – e retornar apenas valores, não podendo executar comandos ou chamadas de funções.

// Estrutura: Para o ternário, é obrigatório colocar código na segunda expressão. Se não quisermos que nada aconteça, podemos usar uma string vazia ''.

let oMaior = 4 > 10 ? 'O 4 é o maior' : 'O 10 é o maior';

console.log(oMaior);

// 4 > 10: CONDIÇÃO: declaramos uma expressão, que retornará true ou false.
// 'O 4 é o maior': PRIMEIRA EXPRESSÃO: se a condição for verdadeira, o código após o ponto de interrogação será executado.
// 'O 10 é o maior': SEGUNDA EXPRESSÃO: Se a condição for falsa, o código após os dois pontos será executado. É obrigatório escrevê-lo.

// Caso queira imprimir o resultado, colocar a condicão dentro de um valor de uma variável.

// Exemplo:

let dia = 'domingo';

let resultado = dia == 'domingo' ? 'Vou a praia' : 'Fico em casa';

console.log(resultado);