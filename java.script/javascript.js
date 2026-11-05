let valorConsumo = parseFloat(prompt("Digite o valor total da conta (consumo):"));
let porcentagemGorjeta = parseFloat(prompt("Digite a porcentagem da gorjeta (ex: 10, 15, 20):"));
let quantidadePessoas = parseInt(prompt("Em quantas pessoas a conta sera dividida"));

let valorGorjeta = valorConsumo * (porcentagemGorjeta / 100);
let valorTotal = valorConsumo + valorGorjeta;
let valorPorPessoa = valorTotal / quantidadePessoas;


let mensagemFinal = 
 Resumo da Conta  \n + 
+ Consumo: R$ ${valorConsumo.toFixed(2)}\n + 
+ Gorjeta: R$ ${valorGorjeta.toFixed(2)}\n + 
+ Total com Gorjeta: R$ ${valorTotal.toFixed(2)}\n + 
+ Divisao por pessoa (${quantidadePessoas} pessoas): R$ ${valorPorPessoa.toFixed(2)};


alert(mensagemFinal);