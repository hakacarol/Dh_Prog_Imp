/* Aula 08 - Spread Operator
22/06/2021*/

// SPREAD OPERATOR: irá retornar todos os valores do array, ao invés de toda a estrutura do array em si.
// Com isso, é possível realizar cópias de arrays, concatenações, passar valores para funções, e até transformar Strings em Arrays.

// SPREAD em ARRAYS

// Copiar todos os dados de um array para um novo.
let cores = ['Amarelo', 'Vermelho', 'Azul'];
let outrasCores = ['Rosa', 'Verde', 'Preto'];
let todasAsCores = [...cores, ...outrasCores];

console.log(todasAsCores);

// Agrupar todos os dados de um array dentro de um array existente.
let fala = ['Pedro', 'tenha'];
let saudacao = ['Bom dia', ...fala, 'uma feliz semana']; //[ "Bom dia", "Pedro", "tenha", "uma feliz semana" ]

console.log(saudacao);

// SPREAD em OBJETOS
// Copiar todas as propriedades de um objeto em outro.
let carro = {marca:'Ferrari', km:0, ano:2019};
let corredorUm = {nome:'Vettel', idade:32, ...carro};
let corredorDois = {nome:'Leclerc', idade:21, ...carro};

console.log(corredorUm);
console.log(corredorDois);

// SPREAD em FUNÇÕES
// Podemos passar um array como um argumento para uma função. O operador … cuidará da expansão dos dados para que a função os tome como argumentos separados.
// Para exemplificar, usaremos o método Math.min(), que recebe N números de argumentos e retorna o menor.

let notas = [9.3, 8.5, 3.2, 7, 10];
Math.min(...notas);

console.log(Math.min(...notas));


// Parâmentro REST :escrito da mesma forma que o operador spread … . A diferença é que ele é utilizado durante a definição da função, e não durante sua execução. O parâmetro Rest irá gerar um array com todos os argumentos adicionais passados para a função.

// Usado como o último parâmetro de uma função, ele nos permite capturar cada um dos argumentos adicionais passados para essa função.
// Como o Parâmetro Rest captura todos os argumentos restantes, ele deve ser sempre o último parâmetro da função, caso contrário, obteremos um erro.
function somar(...numeros) {
    // Os números agora são um array
    // O método reduce obtém a somatória
    return numeros.reduce((acumulador, num) => acumulador += num);
}
    
console.log(somar(1, 4)); // Devolve 5
console.log (somar(13, 6, 8, 12, 23, 37)); // Devolve 99