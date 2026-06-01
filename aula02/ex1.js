const input = require('readline-sync');

let n1
let n2

n1 = Number(input.question("Digite o primeiro Num: "))
n2 = Number(input.question("Digite o segundo: "))

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

let soma = somar(n1, n2);
let sub = subtrair(n1, n2);
let mult = multiplicar(n1, n2);
let div = dividir(n1, n2);

console.log(`Resultados dos nums ${n1} e ${n2}:`);

console.log("Soma: " + soma);
console.log("Subtração: " + sub);
console.log("Multiplicação: " + mult);
console.log("Divisão: " + div);