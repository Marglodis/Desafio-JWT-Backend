const express = require('express');

const { router: usuarios } = require('./usuarios');

const router = express.Router();

router.use('/usuarios', usuarios);

module.exports = { router };