const express = require('express');

const router = express.Router();
const {create, mostrarUsuario} = require('../controllers/usuarios');
const {login} = require('../controllers/login');
const { verificarUsuario } = require('../middleware/verificarUsuario');

router.post('/usuarios', create);
router.get('/usuarios', verificarUsuario,mostrarUsuario);
router.post('/login',login)

module.exports = { router };