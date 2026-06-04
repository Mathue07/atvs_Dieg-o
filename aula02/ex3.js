const input = require('readline-sync');

let n1 = 0
let n2 = 0

n1 = Number(input.question("Digite o primeiro num: "))
n2 = Number(input.question("Digite o segundo: "))

console.clear()

const somar = (a, b) => a + b
const subtrair = (a, b) => a - b
const multiplicar = (a, b) => a * b

const dividir = (a, b) => {
    if (b === 0) {
        return "Erro: divisão por zero"
    }
    return a / b
}

let soma = somar(n1, n2)
let sub = subtrair(n1, n2)
let mult = multiplicar(n1, n2)
let div = dividir(n1, n2)

console.log(`Resultados dos nums ${n1} e ${n2}:`)
console.log("Soma: " + soma)
console.log("Subtração: " + sub)
console.log("Multiplicação: " + mult)
console.log("Divisão: " + div)