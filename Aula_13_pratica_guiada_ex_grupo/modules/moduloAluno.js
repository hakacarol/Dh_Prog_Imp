// Prática Guiada - Parte 1
// Objetivos

// Vamos realizar uma série de exercícios conectados entre si. O objetivo é trabalhar
// um pouco com exercícios que dependem da etapa anterior para manter uma linha de
// trabalho.

// Importante: Ao final, lembre-se de enviar o código completo para o Github,
// compartilhando o link do projeto com seus professores.

// Micro desafio - Passo 1
// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas
// (number) e notas (array de números). Crie um construtor para ele e importe-o como o
// módulo aluno.

// Micro desafio - Passo 2
// Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.
// Também terá um método chamado faltas, que simplesmente aumenta o número de faltas
// em 1.

function Aluno (nome, faltas, notas) { //Crie um objeto aluno
    this.nome = nome                   // Crie um construtor
    this.faltas = faltas
    this.notas = notas

    this.calcularMedia = function () { //método calcularMedia
        const resultado = (this.notas.reduce((sum,n) => sum+=n, 0))/this.notas.length
        return `O aluno ${nome} possui uma média de ${resultado}`
    }

    this.adicFaltas = function () { //aumenta o número de faltas em 1.
        this.faltas++
        return `O aluno ${nome} está com ${this.faltas} faltas`
    }
   
}

const estudantes = [ //uma lista de estudantes
    new Aluno ('Joaquim', 10, [7, 8, 9, 5, 10]), 
    new Aluno ('Maria Luiza', 9, [1, 8, 9, 7, 10])
]

// console.log(joaquim.calcularMedia())

module.exports = {Aluno, estudantes} //módulo aluno.
