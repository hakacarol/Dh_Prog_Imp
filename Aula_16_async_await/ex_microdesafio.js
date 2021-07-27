// Exercício “Converta Promises em Async/Await”

// Objetivo
// Entender o contexto de utilização e criação de Async/Await.

// Micro desafio
// 1. Crie uma função, que após 5 segundos, dobre o resultado do número
// passado como parâmetro. Essa função deverá retornar uma Promise. Use
// o setTimeOut como temporizador.

function dobrarNumero(numero) {
    return new Promise (resolve => {
        setTimeout (function () {
            resolve(numero * 2);
        }, 5000);
    });
}

// 2. Crie uma função assíncrona que irá receber um parâmetro x. Crie três
// variáveis: a, b e c dentro do corpo da função. Cada uma dessas variáveis
// receberá um await da função do passo anterior. Você deve passar como
// parâmetros dessa função os números 10, 20 e 30, respectivamente.
// 3. Retorne a soma de todos esses elementos, inclusive o parâmetro da
// função assíncrona.

async function sum(x) {
    let a = await dobrarNumero (10);
    let b = await dobrarNumero (20);
    let c = await dobrarNumero (30);
    return x + a + b + c;
}

sum(10).then(resolve => console.log(resolve));
