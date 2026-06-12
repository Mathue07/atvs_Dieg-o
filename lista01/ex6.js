const input = require("readline-sync");

let num =  Number(input.question("Digite um numero: "))

for(let i = num; i >=1; i--){
    console.log(`${i}`)
    num--;
}

console.log("Fim!")