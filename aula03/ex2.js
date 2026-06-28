const podrutos = [
    {id: 1, nome: "Aspirador em formato de vassoura Nimbus 2000 do filme Harry Potter, velocidade ajustavel, desmontavel da cor original do filme", preço: "R$978,67"},
    {id: 2, nome: "Garrafa", preço: "R$17,60"},
    {id: 3, nome: "Girassol de enfeite", preço: "R$9,50"},
    {id: 4, nome: "Geladeira eletrolux 2 portas rosa, enfeites na parte inferior, congelador hiper-forte, tela touch que roda doom e faz gelo automatico", preço: "R$8.459,67"}
]

for(let i = 0; i < podrutos.length; i++){
    console.log(`ID: ${podrutos[i].id}, Nome: ${podrutos[i].nome}, Preço: ${podrutos[i].preço}`)
}

podrutos.push({id: 5, nome: "Poster do Lula em frente ao Bozo, mãos atadas com faixa vermelha e verde, respectivamente, ao lado de Lula, Dilma, ao lado de Bolsonado, Donald Trump", preço: "R$impagavel"})

for(let i = 0; i < podrutos.length; i++){
    console.log(`ID: ${podrutos[i].id}, Nome: ${podrutos[i].nome}, Preço: ${podrutos[i].preço}`)
}