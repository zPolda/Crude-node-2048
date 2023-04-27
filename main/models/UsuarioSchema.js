const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    id: Number,
    nickname: {type: String, required: [true, "Nickname Obrigatorio"]}
});

module.exports = mongoose.model('usuario', UsuarioSchema);