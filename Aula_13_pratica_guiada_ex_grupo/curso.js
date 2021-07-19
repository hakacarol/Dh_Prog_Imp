// OBS.:  Não dá para usar Arrow function para fazer o método em objeto literal. Mas pode usar para fazer os métodos
// metodo é uma função que pertence ao objeto

// Criar um objeto literal curso:
let curso = {
    nome: "CTD",
    notasAprovação: 7,
    faltasMaximas: 2,
    listaAlunos: [],
    adicionarAluno: function (...nomeDoAlunobla) { // Os "..." significa que irá passar 1 ou mais parametros
        this.listaAlunos.push(...nomeDoAlunobla)
    },
    aprovarAluno: function (alunobla) { // fazer um If, devido as várias condições
        let media = alunobla.calcularMedia() 
        if (alunobla.faltas < this.faltasMaximas && media >= this.notasAprovação) {
            return true
        } else if (alunobla.faltas == this.faltasMaximas && media >= this.notaAprovacao * 1.1) {
            return true
        } else {
            return false
        }
    },
    listarAprovados: function() {
        let listaAprovados = [];
        this.listaAlunos.map (elementobla => listaAprovados.push(this.aprovarAluno(elementobla))) //o elementobla chama cada elemento do listaAlunos para dizer o q cada elemento irá fazer
        return listaAprovados
    }
}

module.exports = curso;

/* Feito em Grupo */

// let alunos = require ('./modules/moduloAluno') // crie o objeto literal 
// const curso = {
    
//     titulo: 'CTD',
//     notaAprov: 7,
//     maxFaltas: 3,
//     listaAluno: [],
//     adicAluno: function () { //Crie o método que permite adicionar alunos à lista do curso
//         for (let i = 0; i < alunos.estudantes.length; i++) {
//             this.listaAluno.push (alunos.estudantes[i].nome)
//         }
//         console.log (`Lista de alunos: ${this.listaAluno.join(', ')}`)
//     }        
// }
 
// curso.adicAluno()

// // const curso = {
// //     constructor (titulo, notaAprov, maxFaltas) {
// //     this.titulo = titulo
// //     this.notaAprov = notaAprov
// //     this.maxFaltas = maxFaltas 
// //     this.listaAluno = []
        
// //     this.adicAluno = function () {
// //         for (let i = 0; i < alunos.estudantes.length; i++) {
// //             this.listaAluno.push (alunos.estudantes[i].nome)
// //         }
// //         console.log (`Lista de alunos: ${this.listaAluno.join(', ')}`)
// //     }}             
// // }

// // const curso1 = new curso ('CTD', 7, 5) 
// // curso1.adicAluno()