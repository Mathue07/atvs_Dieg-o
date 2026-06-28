console.clear()

const ler = require("readline-sync");

let produtos = []

for(let x = 0; x < 3; x++) {
    let nome = ler.question("Digite o nome do produto: ")
    let preço = parseFloat(ler.question("Digite o preço do produto: "))

    produtos.push({id: x + 1, nome: nome, preço: preço})

    console.clear()
    }

console.log("Produtos cadastrados:\n")

for(let i = 0; i < produtos.length; i++){
    console.log(`Nome: ${produtos[i].nome}, Preço: R$${produtos[i].preço}`)
}