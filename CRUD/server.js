const express =  require('express');
const app = express();
const port = 3000;

//chamar a conexão com o banco
const db= require('./db');

//rotas do servidor
app.get('/', (req, res) => {
    req.send('Servidor funcionando');
})

app.listen(port,() => {
    console.log("Servidor rodando na porta 3000");
})