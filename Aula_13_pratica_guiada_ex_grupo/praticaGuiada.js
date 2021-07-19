
// Micro desafio - Passo 3
// Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do
// curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de
// estudantes (um array composto pelos alunos criados no passo 1).

// Micro desafio - Passo 4
// Crie o método que permite adicionar alunos à lista do curso, ou seja, quando
// chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na
// propriedade lista de estudantes do objeto curso.

let alunos = require ('./modules/moduloAluno') // crie o objeto literal 
const curso = {
    
    titulo: 'CTD',
    notaAprov: 7,
    maxFaltas: 3,
    listaAluno: [],
    adicAluno: function () { //Crie o método que permite adicionar alunos à lista do curso
        for (let i = 0; i < alunos.estudantes.length; i++) {
            this.listaAluno.push (alunos.estudantes[i].nome)
        }
        console.log (`Lista de alunos: ${this.listaAluno.join(', ')}`)
    }        
}
 
curso.adicAluno()

// const curso = {
//     constructor (titulo, notaAprov, maxFaltas) {
//     this.titulo = titulo
//     this.notaAprov = notaAprov
//     this.maxFaltas = maxFaltas 
//     this.listaAluno = []
        
//     this.adicAluno = function () {
//         for (let i = 0; i < alunos.estudantes.length; i++) {
//             this.listaAluno.push (alunos.estudantes[i].nome)
//         }
//         console.log (`Lista de alunos: ${this.listaAluno.join(', ')}`)
//     }}             
// }

// const curso1 = new curso ('CTD', 7, 5) 
// curso1.adicAluno()