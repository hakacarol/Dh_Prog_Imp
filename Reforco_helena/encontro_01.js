/* Revisão - Helena
17/07/2021 */

// var = lida fora e dentro da caixa
// let = pensar como fosse uma caixa, leitura somente dentro da caixa

// nome para -> função = verbo / variável qualquer = substantivo / mundo real é em inglês - exemplo getReport

// = atribuindo um valor/ guarda esse valor dentro dessa variável
// == igual
// === é igual o valor e o tipo
// && = e || = ou
// return -> É o q vc vai mostrar como resultado
// != diferente

//função declarada 'normal' // basico de criar função
console.log ("DECLARADA");

function nomeDaFuncao (parametro) {
    parametro
    return
}

function somar2 (posicao1, posicao2) {
    return posicao1 + posicao2
}

console.log (somar2 (2, 4))
console.log ("-------------------------------------------------------");

//função expressa
console.log ("FUNÇÃO EXPRESSA");

let nomeDaFuncao2 = function (parametro) {
    parametro
    return
}

let somar = function(a, b) {
return console.log (a +b);
};

somar (3, 6)
console.log ("-------------------------------------------------------");

//arrow function
console.log ("ARROW FUNCTION");

let nomeDaFuncao3 = (parametro, parametro2) => {
    parametro + 1
} 

let somar1 = (a, b) => a + b; // {} -> return

console.log (somar1 (10, 4));
console.log ("-------------------------------------------------------");

//ifs
console.log ("IFS");

let dividir = (a, b) => { 
    if (b != 0 && typeof a == 'number' && typeof b == 'number') { // imaginar o if como uma porta onde tem um segurança // number entre ''
        return a / b
    } else if (b == 0) {
        return 'Não é possível dividir por 0'
    } else {
        return 'não é um numero'
    }
    // não lê nada depois do return
}

console.log (dividir (2,0))
console.log (dividir (2,2))
console.log (dividir ('bla',2))
console.log (dividir (2,true))
console.log ("----------------------");

let dividir2 = (a, b) => {
   switch (b) {
        case 0:
            console.log ('Não é possível dividir por zero.')
            break;
        default:
            console.log (a / b)
    }
}

dividir2 (2,0);
dividir2 (2,2);
// undefined normalmente geralmente é pq não tem return
console.log ("----------------------");

let dividir3 = (a, b) => {
    return b == 0? 'Não é possíve dividir por 0' :/*se não*/ a / b;
}

console.log (dividir3 (2,2));
console.log ("----------------------");

//objeto literal:
console.log ("OBJETO LITERAL");

let carolina = {
    nome: "Carolina", //estrutura -> propriedades : valores
    idade: 31,
    notas: [10, 10, 10, 10],
    temCachorro: true,
    falarOi: function () { //função quando esta dentro do objeto é chamada de método
        console.log ("oi!")
    } 
}

carolina.falarOi();
console.log ("-------------------------------------------------------");

// função construtora não pode criar uma arrow
// função construtora, ela faz objetos e não é um objeto
console.log ("FUNÇÃO CONSTRUTORA");

let Aluno = function (podeSerQualquerCoisa, idade, notas, temCachorro, e) {  // e -> fica de uma cor mais clara, porque ele não tem significado, valor ou sentido para a função
    this.nome = podeSerQualquerCoisa;
    this.idade = idade; /* é '=' pq eu vou atribuir um valor para o this.qualquernome */
    this.nota = notas;
    this.temCachorro = temCachorro
    this.falarOi = function() {
        console.log (`Oi! Meu nome é ${this.nome} :)`)
    };
    this.falarOiPraAlguem = function(nomeDeAlguem) {
        console.log (`Oi ${nomeDeAlguem}! Meu nome é ${this.nome}!`)

    }
}

let vitor = new Aluno ("Vitor", 22, [10, 9, 10, 10], false); // criando um objeto

console.log (vitor)
vitor.falarOi ()
console.log ("----------------------");

let luis = new Aluno ("Luis", 21, [10, 10, 10, 9], false);

console.log (luis)
luis.falarOi()
luis.falarOiPraAlguem(vitor.nome)
console.log ("-------------------------------------------------------");

// template string
console.log ("TEMPLATE STRING");

let animal = "cachorro"
let numero = 30

console.log ("O animal é: " + animal + " e o numero é: " + numero)
console.log (`O animal é: ${animal} e o numero é: ${numero}`)
console.log ("-------------------------------------------------------");

// metodos avançados de array:
console.log ("METODOS AVANÇADOS DE ARRAY");
console.log ("MAP");

let numeros = [5, 3, 8, 2, 9, 5, 4, 10];

// let numerosDobrados; ??
let numerosDobrados = numeros.map (elemento => elemento*2) // elemento pode ser qualque nome / "iterar o array" = passar por cada elemento

console.log (numerosDobrados)
console.log ("----------------------");

function dobrarArray() {
    return numeros = numeros.map (elemento => elemento*2)
}

dobrarArray()
console.log (numeros)
dobrarArray() // irá dobrar o valor do 1°resultado, isso ocorre devido a posilçao q o "dobrarArray()" se encontra
console.log (numeros)

//filter
console.log ("FILTER");

let numeros1 = [5, 3, 8, 2, 9, 5, 4, 10];

let teste = numeros1.filter (qualquerNome => qualquerNome > 5)

console.log (teste)
console.log ("-------------------------------------------------------");

//reduce - normalmente utiliza-se para somar
console.log ("REDUCE");

let teste2 = numeros1.reduce(/*função anônima*/ (banana, chiclete) => banana + chiclete) //banana = acumulador / chiclete =  elemento / Lembre que quando tiver dois paramêtros é necessário ()

console.log (teste2)
console.log ("-------------------------------------------------------");

//slice
console.log ("SLICE");

console.log (numeros1.slice (3, 5)) // (começa, termina) lembrar que a contagem comeca na portinha do elemento
console.log ("-------------------------------------------------------");

//splice - encaixar
console.log ("SPLICE");

let teste3 = numeros.splice (2, 3, 100, 200) // lembrar de uma cirurgia

console.log (teste3) // mostra o q tirou
console.log (numeros) // altera a array original
console.log ("-------------------------------------------------------");

//for
console.log ("FOR");

let numeros3 = [5, 3, 8, 2, 9, 5, 4, 10, 23, 5, 2];

let resultado3 = []; // faz uma array com o []

for (i=0; i<numeros3.length; i++) { // i = indice, mas a letra pode ser qualquer coisa / for não tem return / i+=2 -> i=i+2
//for (i=0; i<=7; i++)    
    resultado3.push (numeros3[i]*2) //push colocar as coisas dentro da array    
}

console.log(resultado3)
console.log ("-------------------------------------------------------");

//forEach
console.log ("FOREACH");

let resultado4 = []; // faz uma array com o []

numeros3.forEach( elemento => resultado4.push(elemento*2)) // vai fazer para cada um "tipo" um FOR dentro da função
console.log(resultado4)