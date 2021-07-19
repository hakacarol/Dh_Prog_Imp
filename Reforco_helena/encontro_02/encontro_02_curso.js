// objeto literal

// OBS.:  Não dá para usar Arrow function para fazer o método em objeto literal. Mas pode usar para fazer os métodos
// metodo é uma função que pertence ao objeto

// 3° Passo

let curso = {
    nome: "CTD",
    notasAprovação: 7,
    faltasMaximas: 2,
    listaAlunos: [],
    adicionarAluno: function (...nomeDoAlunobla) { // Os "..." significa que irá passar 1 ou mais parametros -> rest
        this.listaAlunos.push(...nomeDoAlunobla)
    },
    aprovarAluno: function (alunobla) {
        let media = alunobla.calcularMedia() // não chamar a função aqui dentro
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
        this.listaAlunos.map (elementobla => listaAprovados.push(this.aprovarAluno(elementobla))) // tem o elementobla para chamar cada elemento o q vai fazer
        return listaAprovados
    }
}

module.exports = curso;

