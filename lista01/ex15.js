const podrutos = [
    {id: 1, nome: "Lixeira com saquinho roxo elétrico que troca o saco automaicamente com alexa e google home embutidos", preco: 369.67},
    {id: 2, nome: "Camisa de força preta anti-hulk com estampa do Michel Temer beijando o bolsonaro", preco: 267.67},
    {id: 3, nome: "Janela elétrica com vidro temperado pra ser colocada na geladeira que está dentro da maquia de lavar", preco: 192.67},
    {id: 4, nome: "Quadro negro cor branca com touch screen com bordas azuis em madeira de lei", preco: 99.67},
    {id: 5, nome: "Notebook com cadeira, teclado, monitor e mouse embutidos com fio 50m", preco: 1067.67}
]

const pd3 = podrutos.find (p => p.id === 3);
console.log("a) Podruto de ID3: ", pd3)

const podrutoCaro = podrutos.filter(p => p.preco > 100.00);
console.log("b) Podrutos acima de R$100,00: ", podrutoCaro)

const pdNome = podrutos.map()