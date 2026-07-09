const express = require("express");
const { error } = require("node:console");

const app = express();

app.use(express.json());

app.get('/', (req, res) => {

    res.json({"mensagem de cu sujo": " Meu servidor NÃO esta no ar!"});
    }
);

app.get('/inicio', (req, res) => {

    console.log("Olá! Bem vindo a esse cu do mundo, um site onde você não pode fazer bosta nenhuma. Aproveite!")

    console.log("Nossas abas:    http://localhost3000/pintos-de-borracha;     http://localhost3000/")
    
})

const lanches = [
        {id: 1, nome: "Enroladinho de sasixa", preço: 5.99},
        {id: 2, nome: "Hamburgão simples", preço: 7.50},
        {id: 3, nome: "Coxinha de costela", preço: 6.00}
]

app.get('/lanches', (req, res) => {
    
})

app.post(’/lanches’, (req, res) => {

    const novoAluno = {
        id : proximoId ,
        nome : req . body . nome ,
        nota : req . body . nota
    };

    alunos.push(novoAluno);
    proximoId ++;

res.status(201).json(novoAluno);
}) ;

const pintos = [
        {id: 1, nome: "Pinto negro de 35cm", preço: 57.90},
        {id: 2, nome: "Pênis torto para a direita (ou esquerda se mudar o lado) com sebindo abaixo do cabeçote, 50cm", preço: 82.99},
        {id: 3, nome: "Pica de 10cm azul", preço: 43.00}
    ];

app.get('/pintos-de-borracha', (req, res) => {
    const pintos = [
        {id: 1, nome: "Pinto negro de 35cm", preço: 57.90},
        {id: 2, nome: "Pênis torto para a direita (ou esquerda se mudar o lado) com sebindo abaixo do cabeçote, 50cm", preço: 82.99},
        {id: 3, nome: "Pica de 10cm azul", preço: 43.00}
    ];
    res.json(pintos)
});

app.get('/pintos-de-borracha/:id', (req, res) => {
    const id = Number(req.params.id);
    const penis = pintos.find(a => a.id === id);

    if(!pintos){
        return res.status(404).json({error: "Pênis não encontrado!!!"})
    }
    res.json(penis)
})

app.listen(3000, () => {
    console.log(" Servidor rodando em http://localhost:3000 ");
});