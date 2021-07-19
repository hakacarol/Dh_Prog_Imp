/* Aula 04 - Function e If
08/06/2021*/


let idade = 25; //valor inicial

function alteraIdade() {
    idade++;
    console.log(idade);
    return idade; //encerrar a função 
}
alteraIdade();
alteraIdade();
alteraIdade();
alteraIdade();
alteraIdade();

function calcular (numA, numB, operacao) {
    if (operacao=='+') {
        return numA+numB; }
    if (operacao=='-') {
        return numA-numB; }
    if (operacao=='*') {
        return numA*numB; }
    if (operacao=='/' && numB!=0) {
        return numA/numB; }
    else {
        return 'Impossivel dividir'
    }

}
let resultado = calcular ('2','5','+');
console.log('Resultado= ' + resultado);