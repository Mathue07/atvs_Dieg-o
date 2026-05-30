const input = require("readline-sync")

const numero = Number(input.question("Digite um numero para ver a tabuada: "));

console.clear();3

for(let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}