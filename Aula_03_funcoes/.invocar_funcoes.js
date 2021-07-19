/* Aula 03 - Invocando Functions
01/06/2021*/
// Chamamos PARAMÊTROS as variáveis que escrevemos quando definimos a função.
// Chamamos ARGUMENTOS os valores que enviamos quando invocamos a função.

//Invocando uma função
function fazerSorvete () {
    return '🍦';
}

// A maneira de invocar (também conhecida como chamar ou executar) uma função é escrevendo seu nome, seguido da abertura e fechamento de parênteses.
fazerSorvete (); // Retornará '🍦'

resultado = fazerSorvete (); // Para imprimir no Output. Fazer uma variável, depois aplicar no console
console.log(resultado); // Retornará '🍦'

// Se a função tiver parâmetros, podemos passá-los entre parênteses ao invocá-la. É importante respeitar a ordem, pois o JavaScript atribuirá os valores na ordem em que chegarem.
function bemVindo(nome, sobrenome) {
    return 'Olá, ' + nome + ' ' + sobrenome;
}

bemVindo('João', 'da Silva'); // retornará 'Olá, João da Silva'

resultado = bemVindo ('João', 'da Silva');
console.log(resultado)

// Também é importante ter em mente que, quando temos parâmetros em nossa função, o JavaScript espera que os indiquemos ao executá-la. 
// Neste caso, não tendo recebido o argumento necessário, o JavaScript atribui o tipo de dado undefined aos parâmetros nome e sobrenome.
function bemVindo1(nome, sobrenome) {
    return 'Olá, ' + nome + ' ' + sobrenome;
}
    
bemVindo1 (); // retornará 'Olá undefined undefined'

resultado = bemVindo1 ();
console.log(resultado)

// Para casos como o anterior, podemos definir valores por padrão. Se adicionarmos o sinal de igual = depois de um parâmetro, podemos especificar seu valor, caso nenhum chegue.
function bemVindo2 (nome = 'visitante', sobrenome = 'anônimo') {
return 'Olá, ' + nome + ' ' + sobrenome;
}

bemVindo2 (); // retornará 'Olá, visitante anônimo'

resultado = bemVindo2 ();
console.log(resultado)