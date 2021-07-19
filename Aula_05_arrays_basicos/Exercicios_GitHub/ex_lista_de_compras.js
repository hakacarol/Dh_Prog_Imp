console.log("Lista do Mercado");
let listaMercado = ["café", "banana", "tapioca", "abacate", "chá"];
console.log(listaMercado);

console.log("**********************************");

//Join
console.log("JOIN: unir todos os elementos presentes em uma array, pode adicionar um separador (string) e retorna como string");
console.log("Resultado_Join");
console.log(listaMercado.join("-"))

console.log("**********************************");

//Pop
console.log("POP: remove o último elemento de uma array e retorna o elemento eliminado");
console.log("Resultado_Pop");
listaMercado.pop();
console.log(listaMercado);


console.log("**********************************");

//Push
console.log("PUSH: adiciona os elementos de uma array no final");
console.log("Resultado_Push");
listaMercado.push("leite condensado");
console.log(listaMercado);


console.log("**********************************");

//Shift
console.log("SHIFT: remove o primeiro elemento e retorna o elemento eliminado");
console.log("Resultado_Shift");
listaMercado.shift(listaMercado);
console.log(listaMercado);

console.log("**********************************");

//Unshift
console.log("UNSHIFT: adiciona um ou mais elementos na array no começo");
console.log("Resultado_uNShift");
listaMercado.unshift("macarrão", "tomates");
console.log(listaMercado)