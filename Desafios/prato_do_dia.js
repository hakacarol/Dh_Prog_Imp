// NOME DO DESAFIO: PRATO DO DIA
//
// desafio: montar, de pelo menos 4 formas diferentes, uma função 
// que receba o dia da semana como argumento e retorne o prato correspondente
// pontuação: 3 pontos
//
// regras adicionais:
// 1. o prato de domingo deverá ser escolhido aleatoriamente dentre os demais pratos do dia
// 2. pelo menos uma função com sintaxe tradicional e uma arrow function
// 3. cada forma adicional que funcione adequadamente e que seja suficientemente diferente das demais dará 1 ponto adicional
// 4. o uso do método "filter" dará 1 ponto adicional

cardapio = [
  {dia: "segunda", prato: "salada caesar ao molho ranch"},
  {dia: "terça", prato: "pizza"},
  {dia: "quarta", prato: "arroz com feijão"},
  {dia: "quinta", prato: "macarrão ao alho e óleo"},
  {dia: "sexta", prato: "lasanha"},
  {dia: "sábado", prato: "yakisoba"},
  {dia: "domingo"}
]

resposta = []

for (item of cardapio) {
  if (item == "segunda")
  return `hoje é ${resposta.push(item)}`
}

console.log(resposta)



// let resultado = pratoDoDia1 (segunda)
// console.log(resultado);
 
  
//   const pratoDoDia2 = (/* argumentos */) => {
//     /* lógica */
//   }
  
//   // desenvolva a função pratoDoDia3
//     // desenvolva a função pratoDoDia4