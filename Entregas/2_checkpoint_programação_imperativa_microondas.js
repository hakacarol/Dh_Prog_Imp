/*Olá, você foi contratado para executar este projeto. 
É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado.
Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz,
onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
  Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*Obrigatório

*/

function microondasComida (comida) {
    let resultado;
    switch (comida) {
        case "pipoca":
            resultado = 10
            break;
        case 'macarrao':
            resultado = 8
            break;
        case comida: 'carne'
            resultado = 15
            break;
        case 'feijão':
            resultado = 12
            break;
        case 'brigadeiro':
            resultado = 8
            break;
    }
    return resultado;
}

function tempoMicroondas(tempo, comida) {
    let tempoPadrao = microondasComida (comida)
    if (tempo >= 2 * tempoPadrao && tempo < 3 * tempoPadrao) {
        return "queimou! :("
    } else if (tempo < tempoPadrao) {
        return "tempo insuficiente"
    } else if (tempo >= 3 * tempoPadrao) {
        return "kabumm"   
    } else if (tempo >= tempoPadrao) {
        return "Prato pronto, bom apetite!!!" 
    } else if (tempo >= tempoPadrao) {
        return "Prato pronto, bom apetite!!!" 
    } else {
        return "Prato inexistente"
    }
}

console.log (tempoMicroondas(10,"pipoca"));

