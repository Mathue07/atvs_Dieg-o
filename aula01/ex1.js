const input = require('readline-sync')

let nome = input.question("Escreva seu nome: ")
let idade = input.question("Quantos anos voce tem?: ")
let cidade = input.question("Em que cidade voce mora?: ")

console.log(`Olá, sou ${nome}, tenho ${idade} e moro em ${cidade}`)