/* Exercício “Estações”

Objetivo

Identificar os usos do switch e a sua sintaxe na programação
Micro desafios

Crie um algoritmo utilizando switch que receba uma string e tenha 5 situações:

Situação 1 – Caso na string esteja escrito “Verão”, deve exibir no console a mensagem: “Que calor hein?!”.

Situação 2 – Caso na string esteja escrito “Inverno”, deve exibir no console a mensagem: “Frio dms!”.

Situação 3 – Caso na string esteja escrito “Outono”, deve exibir no console a mensagem: “É a estação em que as folhas caem”.

Situação 4 – Caso na string esteja escrito “Primavera”, deve exibir no console a mensagem: “O momento em que as flores crescem”.

Situação 5 – Caso não se aplique nenhuma das opções acima, deve exibir no console a mensagem: “Ops, estação inválida”.
*/

// let estacao = "mimi i"

// switch(estacao) {
//     case "Verão": 
//         console.log("Que calor hein?!!");
//         break;
//     case "Inverno":
//         console.log("Frio dmms! :(");
//         break;
//     case "Outono":
//         console.log("É a estação em que as folhas caem");
//         break;
//     case "Primavera":
//         console.log("O momento em que as flores crescem")
//         break;
//     default:
//         console.log("Ops, estação criada pela sua mente...")
// }


function estacoes(string) { 
    let mensagem
    switch(string) {
        case "Verão": 
            mensagem = "Que calor hein?!!"
            break;
        case "Inverno":
            mensagem = "Frio dmms! :("
            break;
        case "Outono":
            mensagem = "É a estação em que as folhas caem"
            break;
        case "Primavera":
            mensagem = "O momento em que as flores crescem"
            break;
        default:
            mensagem = "Ops, estação criada pela sua mente..."
    }
    return mensagem;
}

console.log(estacoes("Verão"));