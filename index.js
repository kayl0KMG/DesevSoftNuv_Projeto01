const express = require("express");   //importa o modulo express
const app = express();    //inicia o express 

//npx nodemon index.js - não pecisa ficar apertando o crtl C para fechar a porta pra salvar as alteraçoes pq essa extensão faz isso automaticamente

//rota sobre
app.get("/sobre", function(req, res){
    res.send("<h1>Sobre</h1><p>Projeto feito por Kayla Medeiros sobre consultas por cpf</p>");
})

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao meu site💫</h1>");
})

//rota com query params
app.get("/consulta", function (req, res) {        // req dados enviados pelo cliente
    var cpf = req.query["cpf"];
    
    if(cpf){
       res.send(" Retorno da consulta: cpf = " + cpf);    //res - retorna os dados pro cliente
    }else{
        res.send("cpf não encontrado");
    }
    
})

//rota de cadastro de produtos
app.get("/Produtos", function (req, resp) {
    resp.send("<h1>Lista de Produtos</h1>");
})


// cria a aplicação na porta que vc colocar
app.listen(5000, function (erro) {
    if (erro) {
        console.log("ERRO❌")
    } else {
        console.log("INICIADO✅");
    }
})