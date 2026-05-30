const input = require("readline-sync");

let qnt = 10
let numeros = 0
let impares = 0
let pares = 0

for(let i = 1; i <= 10;){
    numeros = Number(input.question(`Escreva ${qnt} numero(s):`))
    i++; qnt--

    if(numeros % 2 === 0){
        pares++
    }
    else{
        impares++
    }
}

    console.log(`Sua sequencia de numeros contem ${impares} numeros impares e ${pares} numeros pares.`);