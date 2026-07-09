const express = require("express");
const {error} = require("node:console");

const app = express();

app.use(express.json());

app.get('/inicio', (req, res) => {

    res.json({"mensagem de cu sujo": " Meu servidor NÃO esta no ar!"});
    }
);

app.get('/inicio', (req, res) => {

    console.log("Olá! Bem vindo a esse cu do mundo, um site onde você não pode fazer bosta nenhuma. Aproveite!")
    
})

const lanches = [
        {id: "1", nome: "Pastel de Pizza", preço: 6.59},
        {id: "2", nome: "Risoli de carne", preço: 5.00},
        {id: "3", nome: "Esfiha de Carne", preço: 10.00}
    ];

app.get('/lanches', (req, res) => {
    res.json(lanches)
})

const pintos = [
        {id: 1, nome: "Pinto negro de 35cm", preço: 57.90},
        {id: 2, nome: "Pênis torto para a direita (ou esquerda se mudar o lado) com sebindo abaixo do cabeçote, 50cm", preço: 82.99},
        {id: 3, nome: "Pica de 10cm azul", preço: 43.00}
    ];

app.get('/pintos-de-borracha', (req, res) => {
    res.json(pintos)
});

    let proxId = 4

app.post('/lanches', (req, res) => {

    const novoLanche = {
        id : proxId,
        nome : req.body.nome,
        preço : req.body.preço
    }
    lanches.push(novoLanche);
    proxId++

    res.status(201).json(novoLanche);
})

app.put('/pintos-de-borracha/:id', ( req , res ) => {

    const id = Number(req . params . id) ;
    const pintos = pintos.find(a => a . id === id) ;
 
    if (!pintos) {
        return res.status(404).json({erro: "Pinto nao encontrado" }) ;
    }

    pintos.nome = req.body.nome;
    pintos.preço = req.body.preço;

    res.json(pintos);
}) ;

app.get('/pintos-de-borracha/:id', (req, res) => {
    const id = Number(req.params.id);
    const penis = pintos.find(a => a.id === id);

    if(!pintos.id){
        return res.status(404).json({error: "Pênis não encontrado!!!"})
    }
    res.json(penis)
})

app.listen(3000, () => {
    console.log(" Servidor rodando em http://localhost:3000 ");
});