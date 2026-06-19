const ler = require("readline-sync")

function reverter(palnum){
  let resultado = [];
  for (let i = palnum.length - 1; i >= 0; i--) {
    resultado.push(arr[i]);
  }
  return resultado;
}

const meuArray = ler.question("Escreva uma palavra ou sequencia de Numeros: ");
console.log(`${reverter(meuArray)}`)
