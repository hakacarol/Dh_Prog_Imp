/* Aula 02 - Variáveis
28/05/2021*/

// As variáveis são espaços de memória no computador, onde podemos armazenar diferentes tipos de dados.

// 3 tipos de variáveis: var, let, const
// A principal diferença entre elas só será visível no bloco de código em que for declarada.
// Os blocos de código são delimitados por um par de chaves {}.

// VAR: ignora os blocos de código e converte a variável em global. Se houver uma outra variável com o mesmo Nome no cógido, estaremos alterando o seu valor.
// LET: respeita os blocos de código. Isso sign. que o nome não poderá ser acessada fora do {}. EM GERAL o LET possui mais benefícios em comparação ao VAR, por isso, devemos utilizar, por padrão, let para declarar variáveis.
// CONST: respeita os blocos de código, uma vez que atribuído a ela algum valor, não poderá ser alterada. *Boa prática* -> Assegurar o valor da variável, impedindo qualquer alteração.

// *Boa prática* utilizar o camelCase
// Uma vez que a variável ja foi declada, atribuimos os próximos valores sem ela

// Estrutura: Variável Nome(nome que servirá para identificar a varíavel) =(atribuição) Valor;(o que será armazanado na variável)


var minhaPrimeiraVariavel;
minhaPrimeiraVariavel = "Hello World!!!";

console.log(minhaPrimeiraVariavel);
