const express = require('express');
const bodyParser = require('body-parser');



const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(4000, () => console.log("Servidor corriendo: http://localhost:4000"))


