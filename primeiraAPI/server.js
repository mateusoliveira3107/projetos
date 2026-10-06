const express = require('express');

const app = express();

const equipamentos = [
    {
        "codigo": 1,
        "nome": "Torno",
        "setor": "Usinagem",
        "operacional": true
    },
    {
        "codigo": 2,
        "nome": "Prensa",
        "setor": "Estamparia",
        "operacional": false
    },
    {
        "codigo": 3,
        "nome": "Impressora",
        "setor": "Fabricacao",
        "operacional": true
    }
]

app.listen(4000, function() {
    console.log("API de equipamentos iniciada!")
});

app.get("/equipamentos/1", function(req, res) {
    res.json(equipamentos.find(function(r) {
        return r.codigo === 1;
    }));
});
// app.get("/equipamentos", function(req, res) {
//     res.json(equipamentos)
// });
app.get("/", function(req, res) {
    res.send("API de equipamentos funcionando!");
});

