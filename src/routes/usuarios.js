const express = require('express');

const usuariosController = require('../controllers/usuarios');

const router = express.Router();

router.get('/', usuariosController.list);
router.get('/:id', usuariosController.findOne);
router.post('/', usuariosController.create); //crear usuarios
router.put('/', usuariosController.update);
router.delete('/', usuariosController.remove);

module.exports = { router };