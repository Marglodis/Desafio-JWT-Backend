const express = require('express');

const router = express.Router();
const usuariosController = require('../controllers/usuarios');
const loginController = require('../controllers/login');
const { verificarCredenciales } = require('../services/usuarios');

router.post('/usuarios', usuariosController.create);
router.post('/login',loginController.login)

router.get('/usuarios', usuariosController.list);
router.get('/usuarios', verificarCredenciales, usuariosController.findOne)

module.exports = { router };