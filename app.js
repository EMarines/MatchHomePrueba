const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
require('dotenv').config();
const port = process.env.PORT || 3000;
//Coexión a db
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.dsxt0.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

mongoose.connect(uri, 
{useNewUrlParser: true, useUnifiedTopology: true}
)
 .then(() => console.log('Base de datos conectada'))
 .catch(e => console.log(e))

//Motor de Plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Ruta fija 
app.use(express.static(__dirname + "/public"));

//Rutas Web
app.use('/', require('./router/RutasWeb'));
app.use('/contactos', require('./router/Contactos'));
app.use('/propiedades', require('./router/Propiedades'));

app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404",
     descripcion: "Tilulo del sitio web 404"
     })
})

app.listen(port, () => {
  console.log('servidor a su servicio en el puerto', port)
})