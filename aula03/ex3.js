console.clear()

const podrutos = [
    {id: 1, nome: "Aspirador em formato de vassoura Nimbus 2000 do filme Harry Potter, velocidade ajustavel, desmontavel da cor original do filme", preço: 978},
    {id: 2, nome: "Garrafa", preço: 17},
    {id: 3, nome: "Girassol de enfeite", preço: 9},
    {id: 4, nome: "Geladeira eletrolux 2 portas rosa, enfeites na parte inferior, congelador hiper-forte, tela touch que roda doom e faz gelo automatico", preço: 8450},
    {id: 5, nome: "Poster do Lula em frente ao Bozo, mãos atadas com faixa vermelha e verde, respectivamente, ao lado de Lula, Dilma, ao lado de Bolsonado, Donald Trump", preço: 350}
    ]

    let Item3 = podrutos.find(item => item.id === 3)
    let ItemCaro = podrutos.filter(item => item.preço > 50)

    console.log(`Nome: ${Item3.nome}\n`)

    console.log("Podrutos acima de R$50,00:\n")

    for (let i = 0; i < ItemCaro.length; i++) {
        console.log(`ID: ${ItemCaro[i].id}, Nome: ${ItemCaro[i].nome}, Preço: ${ItemCaro[i].preço}`)
        }