const input = require('readline-sync');

let n1 = 0
let n2 = 0

n1 = Number(input.question("Digite o primeiro Num: "))
n2 = Number(input.question("Digite o segundo: "))

console.clear()

function executOp(a, b, operacao) {
    const resultado = operacao(a, b)
    console.log(resultado)
}

console.log(`Resultados dos nums ${n1} e ${n2}:`)

console.log("Soma:")
executOp(n1, n2, (a, b) => a + b)

console.log("Subtração:")
executOp(n1, n2, (a, b) => a - b)

console.log("Multiplicação:")
executOp(n1, n2, (a, b) => a * b)

console.log("Divisão:")
executOp(n1, n2, (a, b) => b === 0 ? "Erro: divisão por zero" : a / b)