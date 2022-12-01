const express = require('express');
const app = express();
let cors = require('cors');
const bodyparse = require('body-parser');

app.use(cors());
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended:false}));

app.use(require('./src/Router/correoRoutes'));

app.listen('3000', ()=>{
    console.log('escuchando');
});