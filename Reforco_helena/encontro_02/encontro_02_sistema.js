//aqui fiz a importação do arquivo aluno:
let Aluno = require("./encontro_02_aluno");  // aluno poderia ter outro nome
// const { listaAlunos } = require("./encontro_02_curso");
//aqui fiz a importação do arquivo curso:
let curso = require("./encontro_02_curso")

// 2° passo

// Objetos literais com a função construtora
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

curso.listaAlunos.forEach (elemento => fazerRelatorio (elemento)) // ou map



// função construtora - serve para otimizar objetos literais  
// nao tem como fazer arrow function para criar uma função construtora, mas pode para fazer como método dentro da função construtora.
// em um objeto literal você não pode usar arrow function para fazer um método da erro!
// o objeto literal não usa arrow function para fazer o metodo dela. 
// this funciona de forma diferente em situações diferentes


