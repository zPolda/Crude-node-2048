const express = require("express");
const servidor = express();
servidor.use(express.json());
require('./db/mongo');

const scoreboardRouter = require('./routes/scoreboardRouter');
servidor.use('/scoreboard', scoreboardRouter);

const usuarioRouter = require('./routes/usuarioRouter');
servidor.use('/usuario', usuarioRouter);

servidor.listen(3000,
    function(){
        console.log("Servidor rodando em http://localhost:3000");
    }    
);