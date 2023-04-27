const usuarioController = require('../controllers/usuarioController');
const express = require('express');
const router = express.Router();

router.get('/', usuarioController.listar);
router.get('/:id', usuarioController.buscarPorId);
router.post('/', usuarioController.salvar);
router.put('/:id', usuarioController.atualizar);
router.delete('/:id', usuarioController.excluir);

module.exports = router;
