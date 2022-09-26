const db = require('../models');
const express = require('express');
const { Router } = require('express');
const router = express.Router();


router.get("/",async(req,res) =>
{
      try
      {

            let arrUsers = await db.User.findAll();
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(arrUsers);
      }
      catch(error)
      {
            res.status(400).send("NO PUDE CARGAR LOS USUARIOS" + error);
      }
});

router.post("/",(req,res) =>
{
      let nombre = req.body.nombre;
      let email = req.body.email;
      let clave = req.body.clave;
      try{
            db.User.create({
                  nombre,
                  email,
                  clave
            });

            res.status(200).send("BIEN")
      }
      catch(error){
            res.status(400).send("NO PUDE GUARDAR USUARIO!");
      }
});



module.exports = router;