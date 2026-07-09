
const express = require("express");

const app = express();

app.use(express.json());

app.get('/', (req, res) => {

    res.json({ "mensagem de cu sujo": " Meu servidor NÃO esta no ar!" });
    }
);

app.get('/sobre', (req, res) => {
    const euné = [
        {nome: "Matheus", disciplina: "Back-End", idade: 16},
    ];
    res.json(euné);
});

app.get('/produtos', (req, res) => {
    const produtos = [
        {id: 1, nome: "Aspirador em formato de vassoura Nimbus 2000 do filme Harry Potter, velocidade ajustavel, desmontavel da cor original do filme", preço: 978},
        {id: 1, nome: "Aspirador em formato de vassoura Nimbus 2000 do filme Harry Potter, velocidade ajustavel, desmontavel da cor original do filme", preço: 978},
        {id: 2, nome: "Garrafa", preço: 17},
        {id: 3, nome: "Girassol de enfeite", preço: 9},
        {id: 4, nome: "Geladeira eletrolux 2 portas rosa, enfeites na parte inferior, congelador hiper-forte, tela touch que roda doom e faz gelo automatico", preço: 8450},
        {id: 5, nome: "Poster do Lula em frente ao Bozo, mãos atadas com faixa vermelha e verde, respectivamente, ao lado de Lula, Dilma, ao lado de Bolsonado, Donald Trump", preço: 350}
    ];
    res.json(produtos);
});

app.get('/produtos/caros', (req, res) => {
    const produtos = [
        {id: 1, nome: "Aspirador em formato de vassoura Nimbus 2000 do filme Harry Potter, velocidade ajustavel, desmontavel da cor original do filme", preço: 978},
        {id: 1, nome: "Aspirador em formato de vassoura Nimbus 2000 do filme Harry Potter, velocidade ajustavel, desmontavel da cor original do filme", preço: 978},
        {id: 2, nome: "Garrafa", preço: 17},
        {id: 3, nome: "Girassol de enfeite", preço: 9},
        {id: 4, nome: "Geladeira eletrolux 2 portas rosa, enfeites na parte inferior, congelador hiper-forte, tela touch que roda doom e faz gelo automatico", preço: 8450},
        {id: 5, nome: "Poster do Lula em frente ao Bozo, mãos atadas com faixa vermelha e verde, respectivamente, ao lado de Lula, Dilma, ao lado de Bolsonado, Donald Trump", preço: 350}
    ];

    const produtosCaros = produtos.filter((produto) => produto.preço > 100);

    res.json(produtosCaros);
});

app.get('/status', (req, res) => {
    res.status(200).json({ online: true, Mensagem: "Esse krai funciona!" });
});

app.get('/alunos', (req, res) => {
    const alunos = [
        { "nome": "João", "idade": 20 },
        { "nome": "Maria", "idade": 22 },
    ]
    res.json(alunos);
})

app.listen(3000, () => {
    console.log(" Servidor rodando em http://localhost:3000 ");
});