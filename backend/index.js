const express = require('express');

const app = express();

app.get('/users', (req, res) => {
    const {id} = req.query.params
    //console.log(params);
    return res.json({
        evento: "Semana omnistack",
        aluno: "Thiago Valls Bertolino - " + id
    });
});

app.listen(3333);