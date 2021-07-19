// Aula 6 - Loops - Exercício - 15/06

/* 1. Repetir como um papagaio
Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição
se deve mostrar no console a mensagem “Olá mundo”.
2. Contando números ímpares
Crie um loop for de 1 a 10, em que exiba no console apenas o valor das
repetições de números ímpares. Dica: A ideia é que nas repetições ímpares
de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no
console.
3. Criando a tabuada
Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar
utilizar dois loops (for).*/

// 1. Repetir como um papagaio
for (let i=0; i<=4; i++) {
    console.log("Olá mundo!")
}

// 2. Contando números ímpares
for (let i=1; i<=10; i++) {
    // Lembrando % = resto de uma divisão
    // Ou seja, o resto de i divido por 2 não é igual a 0, logo é um numero ímpar
    if (i % 2 !== 0)
    console.log(i)
}

for (let i=0; i<=10; i++) {
    console.log(1+ (2 * i))
}

// 3. Criando a tabuada
for (let x=1; x<=10; x++) {
    console.log ("Tabuada do " + x)
    for (let y=0; y<=10; y++)
    console.log(x*y)
    console.log("-----------------------------------------------")
}