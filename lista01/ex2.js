const input = require('readline-sync');

const alt = input.question("Digite a altura do retângulo: ")
const base = input.question("Digite qual a base do retângulo: ")
const per = (2 * alt) + (2 * base)
const area = base * alt

console.clear()

console.log(`O perímetro desse retângulo é ${per}`)
console.log(`A area é ${area}`)