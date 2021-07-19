//aqui fiz a importação do arquivo aluno:
let Aluno = require("./aluno");  // aluno poderia ter outro nome
// const { listaAlunos } = require("./curso"); // criou sem eu pedir
//aqui fiz a importação do arquivo curso:
let curso = require("./curso")

// Objetos literais com a função construtora
// Criei os alunos com as funções construtora
let joao = new Aluno ("João", 1, [8, 7, 8, 9]);
let clarissa = new Aluno ("Clarissa", 0, [10, 9, 8, 7])
let luisGabriel = new Aluno ("Luis Gabriel", 2, [10, 10, 10, 10])
let debora = new Aluno ("Débora", 1, [10, 10, 8, 9])

// console.log (joao)
// console.log (clarissa)
// console.log (luisGabriel)
// console.log (debora)

// imprimindo a média dos alunos
console.log (joao.calcularMedia())

console.log(joao.faltas) // imprimindo a função antes da função "adicionarFaltas"
joao.adicionarFalta() // adicionando faltas
console.log(joao.faltas) // imprimindo depois da função "adicionarFaltas"

curso.adicionarAluno(joao, clarissa, luisGabriel, debora)
console.log(curso.listaAlunos) // sempre leia, tente ler -> dentro do curso irá ter uma listaAluna que vocÊ irá imprimir para mim

console.log(curso.aprovarAluno(joao)) // o valor está sendo retirado do let joão, de um arquivo que já está feito
console.log(curso.aprovarAluno(clarissa))
console.log(curso.aprovarAluno(luisGabriel))
console.log(curso.aprovarAluno(debora))

console.log(curso.listarAprovados()) // o resultado está ligado ao resultado do "curso.adicionarAluno(joao, clarissa, luisGabriel, debora)""

// Criação de um Relatório para ter os dados dos alunos
let fazerRelatorio = (alunoQualquerNome) => {
    let media = alunoQualquerNome.calcularMedia()
    let aprovado = curso.aprovarAluno(alunoQualquerNome)
    console.log (`
    Nome: ${alunoQualquerNome.nome}
    Faltas: ${alunoQualquerNome.faltas}
    Notas: ${alunoQualquerNome.notas}
    Media: ${media}
    Aprovado: ${aprovado}
    `)
}

// fazerRelatorio(joao) -> pode ser chamado de um e um aluno, mas posso fazer por foreach chamando todos

curso.listaAlunos.map (elemento => fazerRelatorio (elemento)) // ou for ser feito por forEach

/* Feito em Grupo */
//A resolver com o grupo!

// Importação da classe aluno e array estudantes

// let alunos = require ('./aluno')

// // classe curso

// const curso = {
//     constructor (titulo, notaAprov, maxFaltas) {
//     this.titulo = titulo
//     this.notaAprov = notaAprov
//     this.maxFaltas = maxFaltas 
//     this.listaAluno = []
    
// // método para adicionar a lista de alunos de estudantes no listaAluno    
        
//     this.adicAluno = function () {
//         for (let i = 0; i < alunos.estudantes.length; i++) {
//             this.listaAluno.push (alunos.estudantes[i].nome)
//         }
//         console.log (`Lista de alunos: ${this.listaAluno.join(', ')}`)
//     }}             

//     // this.aprovacao = function (nomeAluno) {
//     //     switch(nomeAluno.tolowerCase()){

//     //     }
//     // }
// }
    

// //criação dos curso

// const cursosLista = [
//     new curso ('CTD',7,5),
//     new curso ('CTD2',6,3)
// ]

// cursosLista[1].adicAluno()
// console.log(`Lista de alunos do ${cursosLista[1].titulo}: ${cursosLista[1].listaAluno.join(', ')}`)

// // Exportação do objeto curso com seus métodos e da lista de cursos

// module.export={curso,cursosLista}