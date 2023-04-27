const scoreboardModel = require('../models/ScoreboardSchema');
const UsuarioSchema = require('../models/UsuarioSchema');

class ScoreboardController {

    //get
    async listar(req, res){        
        //NoSQL
        //select * from scoreboard;
        const scoreboard = await scoreboardModel.find({});
        res.json(scoreboard);
    }
    //get
    async listarTopDez(req, res){ 
        //select * from scoreboard order by score desc limit 10;
        const scoreboard = await scoreboardModel.find({}).sort({'score':-1}).limit(10);
        res.json(scoreboard);
    }
    
    //post
    async salvar(req, res){ 
        const scoreboard = req.body;

        const usuario = await UsuarioSchema.findOne({'id': scoreboard.usuario});
        scoreboard.usuario = usuario;

        const resultado = await scoreboardModel.create(scoreboard);
        res.json(resultado);
    }

    //delete
    async excluirPorUsuario(req, res){
        const idUsuario = req.params.idUsuario;
        //select _id from  scoreboard where codigo = xxxxx;
        
        await scoreboardModel.deleteMany({"usuario.id":idUsuario});
        res.send('Conteúdo excluído!');
    }

}

module.exports = new ScoreboardController();
