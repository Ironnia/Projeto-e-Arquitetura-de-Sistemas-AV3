// app.js
const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');

// Configuração para permitir JSON e CORS (importante para o passo 2.2)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// Usa as rotas definidas
app.use('/', userRoutes);

const PORT = process.env.PORT || 8081;
var server = app.listen(PORT, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Aplicação em Camadas rodando em http://%s:%s", host, port)
})