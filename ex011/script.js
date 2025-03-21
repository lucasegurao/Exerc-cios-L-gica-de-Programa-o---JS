const taxaCambio = 6.30 /* "const" é usado para declarar uma constante, ou seja, uma variável cujo valor não pode ser reatribuído depois de definido. É útil para valores fixos e que não podem ser alterados, como a taxa de câmbio usada na conversão de moedas. */

var valorDolares = prompt ("Digite um valor em dólares:")
var valorReais = Number(valorDolares) * taxaCambio

alert("O valor de $" + valorDolares + " em reais é R$" + valorReais.toFixed(2)) /* ".toFixed(2)" é utilizado para exibir o resultado com duas casas decimais.*/