const ler = require("readline-sync")

let a = Number(ler.question("Escreva um numero: "))
let b = Number(ler.question("escreva outro numero: "))

function min(a, b){
    if(a > b){
        return b
    }

    else{
        return a
    }
}

const min2 = (a, b) => a < b ? a : b

console.log(`${min(a, b)}`)