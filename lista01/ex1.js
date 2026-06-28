const input = require('readline-sync');

let C = input.question(`Digite a temperatura em graus celcius: `)
let F = C * 1.8 + 32

console.log(`A temperatura em Fahrenheit é: ${F}`)