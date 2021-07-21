/* Exercício “Estruturando JSON”

Objetivo

Entender como estruturar informações em JSON e como utilizar seus métodos.

Micro desafios

Crie um objeto, contendo int, string, object e array em seu conteúdo. 
Após isso transforme o array em JSON. Exiba o valor do JSON, 
copie e valide no site JSON Formatter & Validator https://jsonformatter.curiousconcept.com/

Pegue o JSON validado na etapa anterior, e o atribua a uma string. Após isso o transforme em um objeto e acesse alguns de seus valores e os exiba.
*/

// Criando um objeto
const produto = {
    nome: "camiseta",
    valor: 30.0,
    categoria: {
      ano: 2020,
      colecao: "verão" 
    },
    cores: ["azul", "amarelo", "branco", "preto"]
}

// Extraindo o Array do objeto
const camisetaCores = produto.cores

console.log(camisetaCores)

// Convertendo a Array para um JSON
const camisetaCoresConvertidoParaJSON = JSON.stringify(camisetaCores);

console.log(camisetaCoresConvertidoParaJSON) // ["azul","amarelo","branco","preto"]

// Convertendo a Array para um JS
let camistaCoresConvertidasJS = JSON.parse(camisetaCoresConvertidoParaJSON)

console.log(camistaCoresConvertidasJS)

// Acessando os valores da Array
console.log(camistaCoresConvertidasJS[1])
console.log(camistaCoresConvertidasJS[3])
console.log(camistaCoresConvertidasJS.length)