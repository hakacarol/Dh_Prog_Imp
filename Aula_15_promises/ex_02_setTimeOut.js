// Aula 15 -Promises - 20/07/2021

/*
Para demostrar o uso de promessas, usaremos exemplos de retorno de chamada:
Esperando por tempo limite.
*/
console.log('Requisição em andamento...')
setTimeout(
    function() {
        funcaoConectar('Server Conectado - Ok');
    }, 2000);

    function funcaoConectar(value) {
        console.log(value);
    }