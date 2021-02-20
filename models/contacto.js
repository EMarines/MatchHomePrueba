const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactoSchema = new Schema({
  name: String,
  email: String
});

// Crear el modelo
const Contacto = mongoose.model('Contacto', contactoSchema);

module.exports = Contacto;