const express = require('express'); //  Aqui está sendo requerido o express
const app = express(); // Aqui está sendo passado para a const app, e sendo chamado o express após ser requerido acima

app.set("view engine", "ejs"); // Aqui está sendo passado os parametros para o express entender que vai ser renderizado o html no navegador, foi passdo o tipo do arquivo como EJS, e o motor view engine.

app.get("/", function (req, res) { // Aqui está sendo criado a rota do arquivo para ser renderizado, com os parametros req, de requisição e res de resposta.

    res.render("pages/index");
});

app.get("/sobre", function (req, res) { 

    res.render("pages/about");
});

app.listen(8080); // Aqui está sendo passado o endereço da porta que será rodado a aplicação.
console.log("Servidor funcionando");

// Para este arquivo server.js rodar na porta escolhida, é necessário criar a pasta views e colocar este arquivo dentro dela.

// Toda ves que este arquivo for alterado tem que para o servidor no termonal e rodar novamente, no caso dos arquivos EJS não é necessário, basta somente atualizar a pagina no browser