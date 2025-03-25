// const taxaCambio = 5.33

// var valorReais = prompt ("Digite um valor em real:")
// var valorDolares = Number(valorReais) / taxaCambio

// alert("O valor de R$" + valorReais + " em reais é $" + valorDolares.toFixed(2))



/* Desenvolvido em Sala de Aula */

var reais = Number(prompt("Digite um valor em reais: "))
var taxaCambio = 5.30
var dolarConvertido = reais / taxaCambio

alert (`O valor de R$${reais} = R$${dolarConvertido.toLocaleString('pt-br', {style: 'currency', currency: 'USD'})}`)