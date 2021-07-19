/* Aula 03 - Revisão de variáveis - Typeof 
01/06/2021*/

// Typeof: retorna uma string indicando o tipo de um operando.

nome = "Carolina" // string (texto)
idade = 31 // número inteiro (int)
peso = 60.1 // número com ponto flutuante ou casas decimais
temFaculdade = true; // lógico -> verdadeiro ou falso
ehFeioDemais = false;

console.log(typeof nome, typeof idade, typeof peso, typeof temFaculdade, typeof ehFeioDemais);
console.log(typeof(nome, idade, peso, temFaculdade, ehFeioDemais)); // Retornará: undefined undefined undefined undefined undefined

console.log(typeof nome);
console.log(typeof peso);
console.log(typeof temFaculdade);
console.log(typeof ehFeioDemais);