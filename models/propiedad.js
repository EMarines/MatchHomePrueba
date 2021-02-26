const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propiedadSchema = new Schema({
  nameProp: String,
  colonia: String,
  precio: Number
});

// Crear el modelo
const Propiedad = mongoose.model('Propiedad', propiedadSchema);

module.exports = Propiedad;