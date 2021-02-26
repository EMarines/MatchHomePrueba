const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactoSchema = new Schema({
  name: String,
  telefono: Number,
  email: String,
  tipCont: String
});

// Crear el modelo
const Contacto = mongoose.model('Contacto', contactoSchema);

module.exports = Contacto;