/* Aula 14 - Json
16/07/2021*/

const fs = require ('fs'); // fs = file system - nativo

let frutas = '{"Fruta":"banana", "Preco":8.50, "Tipo":["prata", "maça", "nanica"], "Origem":"Brasil"}';

fs.writeFileSync ('teste_ex_03_json.txt', frutas); //writeFilesSync - sincronizar (cria?) um arquivo para escrever / (arquivo criado, conteúdo do arquivo) - parâmetros

// criar o arquivo
// terminal -  node ex_03_jsonFS.js

// ler o arquivo
// let lerJson = fs.readFileSync ('teste_ex_03_json.txt'); //codificação de caracteres sem utf-8 - leitura computacional
// console.log (lerJson);

let lerJson = fs.readFileSync ('teste_ex_03_json.txt', 'utf-8'); //codificação de caracteres - leitura humana
console.log (lerJson);

// converte objJSON para objJS
let converterLerJson = JSON.parse(lerJson);
console.log (converterLerJson);