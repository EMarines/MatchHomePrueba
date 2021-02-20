const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // console.log(__dirname)
  res.render("index", {titulo : "mi titulo dinámico"})
})

router.get('/servicios', (req, res) => {
  res.render("servicios", {tituloServicios: "Mensaje dinámico de Servicios"})
})


module.exports = router;
