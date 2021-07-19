// NOME DO DESAFIO: VALIDAÇÃO DE CARTÃO DE CRÉDITO
//
// regras: crie uma função que recebe um número de cartão de crédito (16 dígitos),
// identifica se o argumento corresponde a um número de cartão de crédito válido,
// e retorna true se o número for válido, ou false se não for.
//
// para isso, você deverá utilizar o algoritmo de Luhn, que funciona da seguinte forma:
// 1. comece pelo último dígito do número fornecido e vá para a esquerda
// 2. a cada 2 dígitos, dobre o número fornecido
// 3. se o resultado da dobra for maior que 9, subtraia 9
// 4. some todos os números obtidos, incluindo os que não foram dobrados
// 5. identifique se o resultado final é divisível por 10
// 6. se o resultado for divisível por 10, o número é válido, se não for, não é válido
//
// exemplo: se for fornecido o número 1234678934561234, a operação será a seguinte
// 4 -> último dígito -> não dobra  -> 4 ---------------------------------> 4
// 3 -> posição par   -> dobra      -> 6 ---------------------------------> 6
// 2 -> posição ímpar -> não dobra  -> 2 ---------------------------------> 2
// 1 -> posição par   -> dobra      -> 2 ---------------------------------> 2
// 6 -> posição ímpar -> não dobra  -> 6 ---------------------------------> 6
// 5 -> posição par   -> dobra      -> 10 - 9 ----------------------------> 1
// 4 -> posição ímpar -> não dobra  -> 4 ---------------------------------> 4
// 3 -> posição par   -> dobra      -> 6 ---------------------------------> 6
// 9 -> posição ímpar -> não dobra  -> 9 ---------------------------------> 9
// 8 -> posição par   -> dobra      -> 16 - 9 ----------------------------> 7
// 7 -> posição ímpar -> não dobra  -> 7 ---------------------------------> 7
// 6 -> posição par   -> dobra      -> 12 - 9 ----------------------------> 3
// 4 -> posição ímpar -> não dobra  -> 4 ---------------------------------> 4
// 3 -> posição par   -> dobra      -> 6 ---------------------------------> 6
// 2 -> posição ímpar -> não dobra  -> 2 ---------------------------------> 2
// 1 -> posição par   -> dobra      -> 2 ---------------------------------> 2
// soma -> 4 + 6 + 2 + 2 + 6 + 1 + 4 + 6 + 9 + 7 + 7 + 3 + 4 + 6 + 2 + 2 = 71
// módulo -> 71 % 10 = 1
//
// função deverá retornar false. este não é um número de cartão de crédito válido
//
// pontuação: 5 pontos
//
// regras adicionais:
// 1. a validação de dados fornecidos no argumento dará 1 ponto adicional
// 2. se você fizer mais de uma função com formas diferentes de obter o resultado, cada uma razoavelmente diferente dará 1 ponto adicional
//
// sugestão: Felipe Rosa

const isCreditCardValid = (/* argumentos */) => {
    /* lógica */
  }