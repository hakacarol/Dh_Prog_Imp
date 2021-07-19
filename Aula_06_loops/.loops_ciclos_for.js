/* Aula 06 - Loops
15/06/2021*/

// Ciclos FOR - são repetições de diferentes naturezas que devem possuir um final
// Os ciclos nos permitem repetir instruções de maneira simples. 
// Podemos fazer isso um certo número de vezes, ou enquanto uma condição for atendida.

/* Estrutura do FOR:
início do contador - limite máximo de repetições - modificador do cantador

for (inicio; condição; modificador) {
codigo que será executado em cada repetição
}*/

// Início de contagem = i (mais usual)
// Modificado de forma crescecente = i++
// Se for verdadeira, o for continua executando nossas instruções
// Se for falsa, interrompe o ciclo

for (let i=1; i<=10; i++) {
    console.log(i * 7);
}

for (let i=0; i<=4; i++) {
    console.log("oi");
}

/*Neste exemplo, vamos contar de 1 até 5 e, em cada repetição, vamos imprimir a
mensagem: “Volta número: x”. Neste caso, o x é substituído pelo número da contagem.*/

for (let volta=1; volta<=5; volta++) {
    console.log("Volta número: " + volta);
}