/* Aula 02 - Operadores
28/05/2021*/

// Os operadores nos permitem manipular o valor das variáveis, realizar operações e comparar seus valores.

// Atribuição: Atribuem o valor à direita para a variável à esquerda.
let idade = 35; // Atribui o número 35 à idade.

console.log(idade);

// Numéricos: Nos permitem realizar operações matemáticas, retornando o resultado da operação.
let idade1 = 10 + 15 // Soma → 25
let idade2 = 10 - 15 // Subtração → -5
let idade3 = 10 * 15 // Multiplicação → 150
let idade4 = 15 / 10 // Divisão → 1.5

console.log(idade1);
console.log(idade2);
console.log(idade3);
console.log(idade4);

// Aritméticos: Nos permitem realizar operações matemáticas, retornando o resultado da operação.
let idadeExemplo = 15

let idade5 = idadeExemplo++ // Incremento, é igual a 15 + 1 → 16
let idade6 = idadeExemplo-- // Decremento, é igual a 15 - 1 → 14
let idade7 = 15 % 5 // Módulo, o resto da divisão de 15 por 5 → 0
let idade8 = 15 % 2 // Módulo, o resto da divisão de 15 por 2 → 1

console.log(idade5);
console.log(idade6);
console.log(idade7);
console.log(idade8);

// Comparação: Realizam comparações que retornam true ou false;
let x = 1;
let y = 2;

let bla1 = x == y // Verifica se é igual
let bla2 = x != y // Verifica se é diferente
let bla3 = x === y // Verifica se é estritamente igual
let bla4 = x !== y // Verifica se é estritamente diferente
let bla5 = x > y // Verifica se é maior
let bla6 = x < y // Verifica se é menor
let bla7 = x >= y // Verifica se é maior e igual
let bla8 = x <= y // Verifica se é menor e igual

console.log(bla1);
console.log(bla2);
console.log(bla3);
console.log(bla4);
console.log(bla5);
console.log(bla6);
console.log(bla7);
console.log(bla8);

// Lógicos: Verificam comparações e retornam true ou false. 

/* São utilizados os sinais:
&& (Ambos valores verdadeiros)
|| (Ambos ou um valor verdadeiro)
! (Nega a condição)*/

// Concatenação: Usado para unir textos (string). Retorna outro texto. 
let nome = 'Christopher';
let sobrenome = 'Brendo';
let nomeCompleto = nome + ' ' + sobrenome; // Christopher Brendo

console.log(nomeCompleto);

//Se misturarmos outros tipos de dados, eles serão convertidos em texto (string).
let fileira = 'M';
let assento = 7;
let localizacao = fileira + assento; // 'M7' como string

console.log(localizacao);