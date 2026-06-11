const input = require('readline-sync');

let num = input.question("Digite um número: ")
let IoN = (num %2 === 0) ? "par" : "impar";

console.clear()

console.log(`O número digitado é ${IoN}`)