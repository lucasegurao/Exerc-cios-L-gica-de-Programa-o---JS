const taxaCambio = 5.33

var valorReais = prompt ("Digite um valor em real:")
var valorDolares = Number(valorReais) * taxaCambio

alert("O valor de R$" + valorReais + " em reais é $" + valorDolares.toFixed(2))