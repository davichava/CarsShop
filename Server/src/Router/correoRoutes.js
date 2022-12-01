const express = require('express');
const app = express();

let envio = require('../Controller/correoController');

app.post('/envio',envio.envioCorreo);

module.exports = app; 