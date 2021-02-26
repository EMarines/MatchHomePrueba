const express = require('express');
const router = express.Router();
const Contacto = require('../models/contacto');

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

router.get('/crear', (req, res) => {
  res.render('crear')
})

router.post('/', async (req, res) => {
  const body = req.body
  console.log(body)
  try {
    await Contacto.create(body)
    res.redirect('/contactos')
  } catch (error) {
    console.log(error)
  }
})

router.get('/:id', async(req, res) =>{
  const id = req.params.id
  try {
    const contactoDB = await Contacto.findOne({ _id: id})
    console.log(contactoDB)
    res.render('editarContacto', {
      contacto: contactoDB,
      error: false
    })
  } catch (error) {
    console.log(error) 
    res.render('editarContacto', {
      error: true,
      mensaje: 'No se encontró al Contacto'  
    })
  }
})

router.delete('/:id', async(req, res) =>{
  const id = req.params.id
  try {
    const contactoDB = await Contacto.findByIdAndDelete({ _id: id})
    if (contactoDB) {
      res.json({
        estado: true,
        mensaje:'eliminado!'
      })
    }else {
      res.json({
        estado: false,
        mensaje:'falló eliminar!'
      })
    }
  } catch (error) {
    console.log(error)
  }
})

router.put('/:id', async(req, res) => {
  const id = req.params.id
  const body = req.body
  try {
    const contactoDB = await Contacto.findByIdAndUpdate(id, body, { useFindAndModify: false })
    console.log(contactoDB)
    res.json({
      estado: true,
      mendaje: 'Editado'
    })
  } catch (error) {
    console.log(error)
    res.json({
      estado: false,
      mendaje: 'No Se Pudo Editar!'
    })
  }
})

module.exports = router;
