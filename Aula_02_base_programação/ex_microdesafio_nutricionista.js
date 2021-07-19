// Exercício Nutricionista

/* Exercício:
Um nutricionista enviou a seguinte tabela com os dados de seus clientes e, você será responsável por calcular o Índice de Massa Corporal de cada registro:

Quais são as variáveis? Quais são as constantes? De que tipo são? Qual variável poderia armazenar o valor null segundo estes dados?

O Índice de Massa Corporal (IMC) se calcula dividindo o peso pela altura2  (a altura deve estar em metros e o peso em quilogramas). Por exemplo, no caso de Carlos de Souza, a altura ao quadrado é 3,09. 

Você deverá criar 6 variáveis:
Nome
Idade
Peso
Altura
Plano (só nos interessa saber se TEM ou NÃO TEM)
Índice de Massa Corporal (IMC)

O programa deverá apresentar em tela o valor do IMC de um paciente da tabela com uma mensagem. Por exemplo: “Aline Ferreira tem 33 anos e seu índice de massa corporal é de xx”.
 */

// José
{
let nome = "José";
let sobrenome = "da Silva";
let idade = 27;
let peso = 83.5;
let altura = 1.70;
let plano = true;
let imc = Math.round (peso) / (altura^2);

imcJose = nome+" "+sobrenome+" "+"tem"+" "+idade+" "+"anos e seu índice de massa corporal é de"+" "+imc;
}

// Carlos
{
let nome = "Carlos";
let sobrenome = "de Souza";
let idade = 28;
let peso = 80.1;
let altura = 1.76;
let plano = true;
let imc = Math.round (peso) / (altura^2);

imcCarlos = nome+" "+sobrenome+" "+"tem"+" "+idade+" "+"anos e seu índice de massa corporal é de"+" "+imc;
}

// Aline
{let nome = "Aline";
let sobrenome = "Ferreira";
let idade = 33;
let peso = 63.7;
let altura = 1.53;
let plano = null;
let imc = Math.round (peso) / (altura^2);

imcAline = nome+" "+sobrenome+" "+"tem"+" "+idade+" "+"anos e seu índice de massa corporal é de"+" "+imc;
}

// Ana
{let nome = "Ana";
let sobrenome = "Paula";
let idade = 26;
let peso = 55;
let altura = 1.62;
let plano = true;
let imc = Math.round (peso) / (altura^2);

imcAna = nome+" "+sobrenome+" "+"tem"+" "+idade+" "+"anos e seu índice de massa corporal é de"+" "+imc;
}

console.log(imcJose);
console.log(imcCarlos);
console.log(imcAline);
console.log(imcAna);
