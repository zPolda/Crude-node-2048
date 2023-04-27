const scoreboardController = require('../controllers/scoreboardController');
const express = require('express');
const router = express.Router();

router.get('/', scoreboardController.listar);
router.get('/topDez', scoreboardController.listarTopDez);
router.post('/', scoreboardController.salvar);
router.delete('/:idUsuario', scoreboardController.excluirPorUsuario);

module.exports = router;
