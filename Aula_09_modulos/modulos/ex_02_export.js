// Aula 09 - Módulos
// Dentro da Pasta Modulos

let pessoa = {
    nome:'Carol',
    idade: 31,
    sexo: 'f',
    filho: 0
}

let cachorro = {
    nome:'Baleia',
    idade1: 3,
    raca: 'vira-latinha',
    sexo: 'f'    
}

// module.exports=cachorro;
module.exports={pessoa, cachorro};