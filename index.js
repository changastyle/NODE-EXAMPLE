console.log("INICIANDO SEQUALIZE");


const express = require('express');
const bodyParser = require('body-parser');
const wsUsers = require('./api/users');

const swagger = require("swagger-ui-express");
const swaggerJS = require("swagger-jsdoc");
     
const definition = {
            openapi: "3.0.0",
            info: {
                  title:"TEST NICO 1",
                  version: "1.0"
            },
            servers:[
                  {
                        url:"http://localhost:4000"
                  }
            ]
      }

const options = {
  definition,     
  apis: ['./api/usuarios'],
};


// 1 -  SETTINGS:
const app = express();
const port =  process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// RUTAS:
app.use('/api/usuarios/', wsUsers);
app.use("/", swagger.serve, swagger.setup(swaggerJS(options))); 

app.listen(port, () => console.log("Servidor corriendo: http://localhost:4000"));