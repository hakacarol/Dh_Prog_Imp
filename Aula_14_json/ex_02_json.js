/* Aula 14 - Json
16/07/2021*/

let frutas = '{"Fruta":"banana", "Preço":8.50, "Tipo":["prata", "maça", "nanica"], "Origem":"Brasil"}';


// converter para JS
let frutasConvertidasJS = JSON.parse(frutas); // .parse = método de conversão

console.log(frutasConvertidasJS);
console.log(frutasConvertidasJS.origem); //undefined //tem ser igual colocado no let
console.log(frutasConvertidasJS.Origem);

// converter para JSON - processo reverso
console.log(frutasConvertidasJS); // antes

let frutasConvertidasParaJSON = JSON.stringify(frutasConvertidasJS);

console.log(frutasConvertidasParaJSON); // depois

