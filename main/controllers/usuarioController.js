const usuarioModel = require('../models/UsuarioSchema');

class UsuarioController {

    //get
    async listar(req, res){        
        //NoSQL
        //select * from usuarios;
        const usuarios = await usuarioModel.find({});
        res.json(usuarios);
    }

    //get
    async buscarPorId(req, res){ 
        const id = req.params.id;
        //select * from usuario where codigo = 2;
        const usuario = await usuarioModel.findOne({'id': id});
        res.json(usuario);
    }
    
    //post
    async salvar(req, res){ 
        const usuario = req.body;
        //Gerador de código
        const obj = await usuarioModel.findOne({}).sort({'id': -1});        
        usuario.id = obj == null ? 1 : obj.id + 1;

        const resultado = await usuarioModel.create(usuario);
        res.json(resultado);
    }

    //put
    async atualizar(req, res){
       const id = req.params.id;
       const usuario = req.body;

       const pontuacao = req.body.score == null ? null: req.body.score;
       //select _id from usuario where codigo = 3; 
       const _id = (await usuarioModel.findOne({'id':id}))._id;       
       //update usuario set descricao = xxxxxx where _id = xxxxxxx;
       await usuarioModel.findByIdAndUpdate(String(_id), usuario);
       res.send("Conteúdo atualizado!");
    }

    //delete
    async excluir(req, res){
        const id = req.params.id;
        //select _id from  usuario where codigo = xxxxx;
        const _id = (await usuarioModel.findOne({'id':id}))._id;
        //delete from usuario where _id = xxxxxxx;
        await usuarioModel.findByIdAndDelete(String(_id));
        res.send('Conteúdo excluído!');
    }
}

module.exports = new UsuarioController();
