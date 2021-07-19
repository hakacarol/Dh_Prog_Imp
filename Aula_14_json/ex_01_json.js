// troca de dados - formulário para um servidor
// troca de dadas - criação e consumo - utilizando api's
// persistencia de dados em navegadores e servidores.
// formato de dados - padrão da web atualmente
// json - não suporta comentários

let dadosJson = '{"nome":"William", "sobrenome":"Pantoja", "idade":53}';

console.log (dadosJson);

// JSON é um obejto nativo
// desserialização = parsing
let dadosConvertidosJS = JSON.parse(dadosJson); // objeto literal

console.log(dadosConvertidosJS);
console.log(dadosConvertidosJS.nome)
console.log(dadosConvertidosJS.sobrenome)
console.log(dadosConvertidosJS.idade)
console.log(dadosConvertidosJS.sobrenome.toUpperCase());

//SERIALIZAÇÃO: Cria um formato JSON
console.log(objetoConvertidoJson);
let objetoConvertidoJson = JSON.stringify (dadosConvertidosJS);

console.log(objetoConvertidoJson);