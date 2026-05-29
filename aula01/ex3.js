const input = require("readline-sync")

let qnt = 5
let numeros
let total = 0

for(let i = 0; i <= 4;){
    numeros = Number(input.question(`Escreva ${qnt} numero(s):`))
    total = total + numeros
    i++; qnt--
}

let media = (total / 5);

console.clear();

if(media > 7){
    console.log(`Aprovado`)
}
else if(media < 7 && media > 5){
    console.log(`Em recuperação`)
}
else{
    console.log(`Reprovado`)
}