const express = require("express");

const app = express();

app.use(express.json());

app.get('/inicio', (req, res) => {
    res.status(201).json("Olá! Bem vindo a esse cu do mundo, um site onde você não pode fazer bosta nenhuma. Aproveite!");
})

// AAAAAAAAAAAAAAAAAAAAA Lanches AAAAAAAAAAAAAAAAAAAAA \\

const lanches = [
        {id: 1, nome: "Pastel de Pizza", preço: 6.59},
        {id: 2, nome: "Risoli de carne", preço: 5.00},
        {id: 3, nome: "Esfiha de Carne", preço: 10.00}
    ];

    let proxIdLanche = 4;

    app.get('/lanches', (req, res) => {
    res.json(lanches)
})

app.post('/lanches', (req, res) => {

    let proxId = lanches.length + 1;
    const novoLanche = {
        id : proxId,
        nome : req.body.nome,
        preço : req.body.preço
    }
    lanches.push(novoLanche);
    proxId++

    res.status(201).json(novoLanche);
})

app.get('/lanches/:id', (req, res) => {
    const id = Number(req.params.id);
    const lanche = lanches.find(a => a.id === id);

    if(!lanche){
        return res.status(404).json({error: "AAAAAAA NUM TEM O LANCHEEEE"})
    }
    res.json(lanche)
})

app.put('/lanches/:id', (req, res) => {
    const id = Number(req.params.id);
    const lanche = lanches.find(l => l.id === id);

    if (!lanche) {
        return res.status(404).json({ erro: "Cadê u lanche?" });
    }

    lanche.nome = req.body.nome;
    lanche.preço = req.body.preço;

    res.json(lanche);
});

app.delete('/lanches/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = lanches.findIndex(l => l.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "No lanche found, otáro" });
    }

    const removido = lanches.splice(index, 1);
    res.json(removido[0]);
});

// AAAAAAAAAAAAAAAAAAAAA Coisas de Borracha AAAAAAAAAAAAAAAAAAAAAA \\

const coisas = [
        {id: 1, nome: "Coisão De Borracha", preço: 57.90},
        {id: 2, nome: "Coisa De Borracha", preço: 82.99},
        {id: 3, nome: "Coisinha De Borracha", preço: 43.00}
    ];

app.get('/coisas-de-borracha', (req, res) => {
    res.json(coisas)
})

app.get('/coisas-de-borracha/:id', (req, res) => {
    const id = Number(req.params.id);
    const coisa = coisas.find(a => a.id === id);
2
    if(!coisa){
        return res.status(404).json({error: "-quem foi Jhon Lenon? 'Eu né' -"})
    }
    res.json(coisa)
})

app.delete('/coisas-de-borracha/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = coisas.findIndex(c => c.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Nada de coisa por aqui" });
    }

    const removido = coisas.splice(index, 1);
    res.json(removido[0]);
});

app.listen(3000, () => {
    console.log(" Servidor rodando em http://localhost:3000/inicio ");
});