/*Exercícios

Objetivos

Nesta aula, iremos aplicar nossos conhecimentos, em exercícios, como forma de aquecimento para a “Prática Guiada” que ocorrerá em nosso encontro ao vivo.
Vamos imaginar um cenário de um e-commerce, onde há diversas operações existentes, como pesquisar por produtos, adicioná-los ao carrinho e realizar uma compra.

No VS Code, resolva as seguintes situações em JavaScript.

Os exercícios possuem soluções que vocês poderão consultar. A ideia é que essa atividade sirva como aquecimento para a Prática Guiada, por isso pratique bastante. 
Tente fazer todos os exercícios antes de analisar o código com as respostas:
*/


// 1.	Crie uma variável produtos, que contenha um array de objetos, com no mínimo 3 itens. 
// Dentro da variável, liste produtos disponíveis, informando os seguintes detalhes: Nome do Produto, Valor do Produto, Qualidade do Produto e Status.

//A informação Qualidade do Produto deve ser um número que irá de 0 a 10.

//A informação Status deve ser um Booleano, indicando se o produto está disponível em estoque.

const produtos = [
    {
        nome: "Produto 1",
        valor: 430.50,
        qualidade: 60,
        status: true
    },
    {
        nome: "Produto 2",
        valor: 1000,
        qualidade: 80,
        status: false
    },
    {
        nome: "Produto 3",
        valor: 1500,
        qualidade: 90,
        status: true
    }
]

//2. Em seguida, um usuário deseja filtrar os produtos, com base em alguns critérios. Selecione todos os produtos que tenham: 

//Valor entre 482 e 1600;
//Qualidade superior a 60;
//Status como disponível.

//O resultado do filtro deve ser armazenado na variável carrinho.

const carrinho = produtos.filter((produto) => {
    const valor = produto.valor
    const qualidade = produto.qualidade
    const status = produto.status

    const selecionado = (valor >= 482 && valor <= 1600) && (qualidade >= 60) && (status == true)

    return selecionado
})

//3.	Por fim, é necessário exibir todos os itens presentes no carrinho, com seus nomes 
// e preços correspondentes, e no final um valor total, resultante da somatória de todos os produtos.

carrinho.forEach((produto) => {
    console.log("Produto: ", produto.nome)
    console.log("Valor: ", produto.valor)
    console.log("------------------------")
})

const total = carrinho.reduce((acumulador, produto) => {
    return acumulador + produto.valor
},0
)


console.log("Total: ", total)