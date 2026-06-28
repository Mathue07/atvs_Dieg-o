const input = require('readline-sync');

let num1
let num2

num1 = Number(input.question("Digite o primeiro Num: "))
num2 = Number(input.question("Digite o segundo: "))

console.clear()

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero";
    }
    return a / b;
}

let soma = somar(num1, num2);
let sub = subtrair(num1, num2);
let mult = multiplicar(num1, num2);
let div = dividir(num1, num2);

console.log(`Resultados dos nums ${num1} e ${num2}:`);

console.log("Soma: " + soma);
console.log("Subtração: " + sub);
console.log("Multiplicação: " + mult);
console.log("Divisão: " + div);