//A resolver com o grupo!

// Importação da classe aluno e array estudantes

let alunos = require ('./moduloAluno')

// classe curso

const curso = {
    constructor (titulo, notaAprov, maxFaltas) {
    this.titulo = titulo
    this.notaAprov = notaAprov
    this.maxFaltas = maxFaltas 
    this.listaAluno = []
    
// método para adicionar a lista de alunos de estudantes no listaAluno    
        
    this.adicAluno = function () {
        for (let i = 0; i < alunos.estudantes.length; i++) {
            this.listaAluno.push (alunos.estudantes[i].nome)
        }
        console.log (`Lista de alunos: ${this.listaAluno.join(', ')}`)
    }}             

    // this.aprovacao = function (nomeAluno) {
    //     switch(nomeAluno.tolowerCase()){

    //     }
    // }
}
    

//criação dos curso

const cursosLista = [
    new curso ('CTD',7,5),
    new curso ('CTD2',6,3)
]

cursosLista[1].adicAluno()
console.log(`Lista de alunos do ${cursosLista[1].titulo}: ${cursosLista[1].listaAluno.join(', ')}`)

// Exportação do objeto curso com seus métodos e da lista de cursos

module.export={curso,cursosLista}