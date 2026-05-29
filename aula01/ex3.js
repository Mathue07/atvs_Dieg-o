const input = require("readline-sync")

let qnt = 5

for(let i = 0; i <= 4;){
    let numeros = Number(input.question(`Escreva ${qnt} numero(s):`))
    i++; qnt--
}