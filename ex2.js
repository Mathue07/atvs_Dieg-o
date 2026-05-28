const input = require('readline-sync')

let num1 = Number(input.question("Digite um numero: "));
let num2 = Number(input.question("Digite outro numero: "));

console.log(`A soma desses dois numeros eh: ${num1 + num2}`)
console.log(`A subtracao eh: ${num1 - num2}`)
console.log(`A multiplicacao eh: ${num1 * num2}`)

if(num2 === 0){
    console.log(`Nao eh possivel fazer multiplicacao por 0`)
}
else{
    console.log(`A divisao eh: ${num1 / num2}`)
}