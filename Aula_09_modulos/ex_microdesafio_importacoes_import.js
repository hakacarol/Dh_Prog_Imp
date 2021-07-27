/* Exercício “Importações”
Objetivo
Entender a implementação e funcionamento das importações e exportações de módulos.
Micro desafios

Crie um módulo que exporte uma função (em um arquivo separado). Após isso, importe o módulo no arquivo principal e execute a função importada.*/

// Criando módulo de importação:
let qualquerPalavra = require('./ex_microdesafio_importacoes_export');

console.log(qualquerPalavra(10, 3));