var salario = Number(prompt("Digite o valor do salário:"));
var bonus = Number(prompt("Digite o valor do bônus:"));

var total = salario + bonus;

alert(`O valor total com o bônus incluído é: R$ ${total.toFixed(2)}`)