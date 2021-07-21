let alunos = require ('aluno')  // crie o objeto literal 
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