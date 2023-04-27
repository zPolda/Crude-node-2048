const mongoose = require('mongoose');
const UsuarioSchema = require('./UsuarioSchema').schema;
const Schema = mongoose.Schema;

const ScoreboardSchema = new Schema({
    usuario: UsuarioSchema,
    score: Number
});

module.exports = mongoose.model('scoreboard', ScoreboardSchema);