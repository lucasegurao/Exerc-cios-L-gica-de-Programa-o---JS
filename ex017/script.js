var soma = 0;

for (var i = 1; i <= 4; i++) 
    var numero = Number(prompt(`Digite o ${i}º valor:`)) /* O parseFloat() em JavaScript é usado para converter uma string em um número decimal (ponto flutuante).*/
    soma += numero

var media = soma / 4

alert(`A média dos valores é: ${media}`)