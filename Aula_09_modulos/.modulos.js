/* Aula 09 - Modulos
25/06/2021*/

/*Módulos: um bloco de código reutilizável, cuja existência ou não, não altera o comportamento de outros blocos de código.
A partir disso, o Node.js se propõe a fragmentar nosso código em pequenos módulos, onde cada um terá uma funcionalidade específica para atingir um objetivo definido.
A utilização de módulos é essencial para a organização e qualidade do código.

TIPOS:

● Módulos nativos: já vêm instalados quando criamos um projeto de Node.js.
● Módulos de terceiros: podemos instalá-los usando o gerenciador de
pacotes npm, que vamos conhecer mais adiante.
● Módulos criados: aqueles criados por nós mesmos.

Por convenção, o nome da variável que armazena o módulo que estamos solicitando deve receber o mesmo nome do módulo, ou uma abreviatura.


MÓDULOS CRIADOS:
Para utilizar um módulo criado por nós mesmos, primeiro devemos criar um
arquivo com extensão .js e, dentro dele, digitar o script que precisamos.
Uma vez definido nosso código, temos que deixá-lo acessível para poder
importá-lo dentro de nossa aplicação. Para isso, temos que fazer uso do objeto
nativo module e de sua propriedade .exports. Atribuímos a ele o nome da
variável que contenha a informação que queremos exportar.
*/

let series = ['Friends', 'Mr. Robot', 'Breaking Bad'];

module.exports = series; // sempre que quisermos exportar módulos de um script, teremos que digitar esta linha ao final do código do módulo.

/* Uma vez que exportamos nosso módulo, vamos ao arquivo onde o queremos importar e usamos a função require().

Como boa prática, os módulos que criamos são geralmente armazenados dentro de uma pasta com o mesmo nome do módulo que estamos prestes a criar.

Quando nos referimos aos arquivos JavaScript, não precisamos escrever a extensão do arquivo no caminho.*/

const series = require('./series/index');


