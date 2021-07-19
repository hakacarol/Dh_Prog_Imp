// Transforme as seguintes funções em arrow functions:

// 1ª função 
function print (mensagem){
    console.log(mensagem)
}

print("Olá, bom dia");

// Com Arrow function
let print1 = () => console.log("Olá mundo!");

print1();

// 2ª função
function soma (n1, n2){
    return n1 + n2
}
 
console.log(soma(10, 10));

// Com Arrow function
let soma1 = (n3, n4) => n3 + n4;

console.log(soma1(2, 5));


