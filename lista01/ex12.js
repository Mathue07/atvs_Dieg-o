const ler = require("readline-sync")

let a = Number(ler.question("Digite um num: "))
let b = Number(ler.question("Digite outro num: "))

function calc(a, b, op){
    return op(a,b)
}

console.log(calc(a,b, (a,b) => a + b))
console.log(calc(a,b, (a,b) => a - b))
console.log(calc(a,b, (a,b) => a * b))
console.log(calc(a,b, (a,b) => a / b))