const express = require('express');
const router = express.Router();

const Contacto = require('../models/contacto')

router.get('/', async (req, res) => {  

  try{
    const arrayContactosDB = await Contacto.find();   
    console.log(arrayContactosDB)
    res.render("contactos", {
      arrayContactos: arrayContactosDB
    })

  }catch (error) {
    console.log(error)
  }
})
module.exports = router;
