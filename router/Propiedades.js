const express = require('express');
const router = express.Router();
const Propiedad = require('../models/propiedad');

router.get('/', async (req, res) => {  
    try{
      const arrayPropiedadesDB = await Propiedad.find();   
      res.render("propiedades", {
          arrayPropiedades: arrayPropiedadesDB
        })
        console.log(arrayPropiedadesDB)
    }catch (error) {
      console.log(error)
    }
  });
    // res.render("propiedades", {
    //     arrayPropiedades: [
    //         {id: 'S1SFEL01', nameProp: 'San Felipe Mho', colonia: 'San Felipe'},
    //         {id: 'S1SFEL02', nameProp: 'Bosques de San Francisco Mho', colonia: 'Bosques de San Francisco'},
    //         {id: 'S1SFEL03', nameProp: 'Cantera Mho', colonia: 'Cantera'}
    //     ]
    // })

module.exports = router;

