// Micro desafio - Passo 1
// Criar um objeto literal 
let maria = {
    nome: "Maria",
    faltas: 2,
    notas: [6, 8, 9, 8]
}

// Micro desafio - Passo 2
// Criar uma função que irá fazer objetos -> construtora 
let Aluno = function (nome, faltas, notas) { // letra maiuscula Aluno por convenção / cor verde -> função construtora 
    this.nome = nome,
    this.faltas = faltas
    this.notas = notas
    this.calcularMedia = () => this.notas.reduce((acumulador, elemento) => acumulador + elemento) / this.notas.length //a função calcularMedia não receberá nenhum parametro, pq vamos colocar a média dentro do parametro/ função dentro do objeto
    this.adicionarFalta = () => this.faltas++; //caso eu quero cinco faltas this.faltas+=5     
}

// Função para exportar
module.exports = Aluno; 

/* Feito em Grupo */
// function Aluno (nome, faltas, notas) { //Crie um objeto aluno
//     this.nome = nome                   // Crie um construtor
//     this.faltas = faltas
//     this.notas = notas

//     this.calcularMedia = function () { //método calcularMedia
//         const resultado = (this.notas.reduce((sum,n) => sum+=n, 0))/this.notas.length
//         return `O aluno ${nome} possui uma média de ${resultado}`
//     }

//     this.adicFaltas = function () { //aumenta o número de faltas em 1.
//         this.faltas++
//         return `O aluno ${nome} está com ${this.faltas} faltas`
//     }
   
// }

// const estudantes = [ //uma lista de estudantes
//     new Aluno ('Joaquim', 10, [7, 8, 9, 5, 10]), 
//     new Aluno ('Maria Luiza', 9, [1, 8, 9, 7, 10])
// ]

// // console.log(joaquim.calcularMedia())

// module.exports = {Aluno, estudantes} //módulo aluno.
