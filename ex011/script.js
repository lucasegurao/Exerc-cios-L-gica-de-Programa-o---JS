const taxaCambio = 6.30

var valorDolares = prompt ("Digite um valor em dólares:")
var valorReais = Number(valorDolares) * taxaCambio

alert("O valor de $" + valorDolares + " em reais é R$" + valorReais.toFixed(2))
