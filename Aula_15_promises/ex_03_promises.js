/*
Para demostrar o uso de promessas, usaremos exemplos de retorno de chamada:
Esperando por tempo limite.

shift + alt + f = identar o código
*/

// host
let dadosConexaoJson = '{"server":"192.168.0.1", "login":"admin", "senha":123}';
// console.log(dadosConexaoJson);

// Covertendo para JS
let dadosConexaoJS = JSON.parse(dadosConexaoJson);
console.log(dadosConexaoJS);
console.log(dadosConexaoJS.server);
console.log(dadosConexaoJS.login);
console.log(dadosConexaoJS.senha);

// usuário
let txtServer = '192.168.0.1';
let txtLogin = 'admin';
let txtSenha = 123

// fechando o portão
let conexao = false;

if (dadosConexaoJS.server == txtServer && dadosConexaoJS.login == txtLogin && dadosConexaoJS.senha == txtSenha) {
    conexao = true;
} else {
    conexao = false;
}

// Criação da Promise
// Concatenação do ex_02
const promessa = new Promise((resolve, reject) => {
    console.log('Requisição em andamento...')
    // Criação de um Delay de 3 segundos
    setTimeout(() => {
        // Verificamos se a promise dará erro ou não
        if (conexao == false) {
            reject('ACESSO NEGADO - SERVER NÃO CONECTADO')
        } else {
            resolve(JSON.stringify({
            vserver: '192.168.0.1',
            vlogin: 'admin',
            vsenha: 123
        }))}
    }, 1000)
})

promessa.then((resolve) => { // consumo a utilização do retorno da promise
    const dados = JSON.parse(resolve); // .parse -> converte para JS
    console.log(dados);
}).catch((reject) => {
    console.log(reject);
});
