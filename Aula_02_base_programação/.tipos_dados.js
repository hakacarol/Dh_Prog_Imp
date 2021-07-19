/* Aula 02 - Tipos de Dados
28/05/2021*/

// Os tipos de dados permitem ao JavaScript conhecer os recursos e funcionalidades que estarão disponíveis para estes dados.

// Numéricos (number):
var num = 35; // número inteiro
var preco = 150.65; // decimais

console.log(num);
console.log(preco);

// String (cadeia de caracteres):
var nome = 'João José'; // aspas simples
var cargo = "Programador"; // aspas duplas têm a mesma função

console.log(nome);
console.log(cargo);

// Boolean (Lógicos ou booleanos) 
var CursoLegal = true;
var falteiNaAula = false;

console.log(CursoLegal);
console.log(falteiNaAula);

// Tipos de dados ESPECIAIS permitem ao JavaScript determinar estados especiais que os dados podem assumir.

// NaN (Not a Number): Indica que o valor não pode ser passado como um número
var divisaoImperfeita = "35a" / 2; // NaN não é um número

console.log(divisaoImperfeita);

// Null (valor nulo): Indica que o valor está vazio ou desconhecido.
var temperatura = null; // sem dados, há algo errado

console.log(temperatura);

// Undefined (sem valor definido) Indica a ausência de valor. As variáveis têm um valor indefinido, até que seja atribuído algum valor.
var saudacao; // undefined, não tem valor

console.log(saudacao);

saudacao = "Olá Mundo!"; // agora temos um valor!

console.log(saudacao);