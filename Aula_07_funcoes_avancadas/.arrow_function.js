/* Aula 07 - Arrow Function 
17/06/2021*/

// FUNCTION
function somar (a, b) {
    return a + b
}
  
// ARROWS FUNCTION: são abreviações que utilizamos nas funções comuns, para economizarmos linhas
// Se a função tem somente uma linha de código, e esta mesma linha é a que vai exibir o retorno, não precisamos adicionar chaves, nem a palavra reservada return.
let somar = (a, b) => a + b;

// Do contrário, vamos precisar utilizar ambos. Isso normalmente ocorre quando temos mais de uma linha de código em nossa função.
let multiplo = (a, b) => {
    let resto = a % b; // Obtemos o resto da divisão.
    return resto == 0; // Se o resto for 0, é múltiplo
};

// Arrow Function:
const somar = () => {
    console.log("Estou em uma arrow function")
}

somar();

// Quando o código tem apenas uma linha não há a necessidade de {}
const somar = () => console.log("Estou em uma arrow function")

somar();

// Quando estiver usando um parametro, não há a necessidade de ter (), mais de um precisa de ()
const somar = numero => console.log("recebi um numero: " + numero)

somar(5);

const somar = (numeroA, numeroB) => {
    console.log("recebi um numero: " + numeroA)
    return numeroA + numeroB
}

console.log(somar(20, 30));


function minhaFuncao(a, b){
    return a*b
};

resultado = minhaFuncao(4, 3);
console.log(resultado);

let soma = (num1, num2) => { 
    return num1 + num2
};

console.log(1+5);

let subtrair = (num3, num4) => num3 - num4;

console.log(4-1);

let triplo = num5 => num5 * 3;

console.log(5)