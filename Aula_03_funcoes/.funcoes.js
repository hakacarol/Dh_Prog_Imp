/* Aula 03 - Function
01/06/2021*/

// Uma função é um bloco de código {} que nos permite agrupar funcionalidades, para usá-las sempre que necessário. 
// Normalmente realiza uma tarefa específica e retorna um valor como resultado.

/* Estrutura: 
FUNCTION: Usamos a palavra function para indicar ao JavaScript que vamos declarar uma função.
NOME: Definimos um nome para referenciarmos nossa função no momento que queremos invocá-la.
PARÂMETROS: Escrevemos os parênteses e, dentro deles, colocamos os parâmetros da função. Se houver mais de um, os separamos por vírgulas, (a, b).
Se na função não houver parâmetros, devemos escrever os parênteses sem nada dentro, ().
Dentro de nossa função, poderemos acessar os parâmetros como se fossem variáveis (a + b), ou seja, ao escrever os nomes dos parâmetros, podemos trabalhar com eles.
CORPO: Entre as chaves de abertura e de fechamento, escrevemos a lógica de nossa função, ou seja, o código que queremos que seja executado cada vez que a invocamos.
RETORNO: É muito comum, na hora de escrever uma função, que queiramos devolver ao exterior o resultado do processo que estamos executando.
Para isso, utilizamos a palavra reservada return seguida do que queremos retornar.

function nome (a, b) {
return a + b;
}
*/

// Declaradas: São aquelas que são declaradas usando a estrutura básica. Podem receber um nome escrito após a palavra reservada function, por meio do qual podemos invocá-la.

function fazerSorvete(quantidade) {
    return '🍦'.repeat(quantidade);
}

// Function expression (expressão de função): São aquelas que são atribuídas como valor de uma variável. Neste caso, a função em si não tem nome, é uma função anônima.

let fazerSushi = function (quantidade) {
    return '🍣'.repeat(quantidade);
}


// Exemplo Daniel Cukier -> funções transformam algo em outra coisa

function transformaAlgo (x) {
    console.log(x); // "efeito colateral"
    return 'gatinho: ' + x;
}

var minhaVariavel = transformaAlgo ('feliz');
var minhaOutraVariavel = transformaAlgo('triste');

console.log(minhaVariavel);
console.log(minhaOutraVariavel);
