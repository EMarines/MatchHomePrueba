const express = require('express');
const app = express();

const port = 3000;

//Motor de Plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  // console.log(__dirname)
  res.render("index", {titulo : "mi titulo dinámico"})
})

app.get('/servicios', (req, res) => {
  res.render("servicios", {tituloServicios: "Mensaje dinámico de Servicios"})
})

app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404",
     descripcion: "Tilulo del sitio web 404"
     })
})

app.listen(port, () => {
  console.log('servidor a su servicio en el puerto', port)
})