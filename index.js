// iMPORTACION DE LOBRERIAS]
require('dotenv').config();
const express = require('express');

// Importacion de archivos propios(controllers, routes, etc...)
const dbConnect = require('./src/database/connection')
const RUTAS_ALUMNOS = require('./src/routes/alumnos');

// Instanciacion de Express (Servidor)
const app = express()

app.use(express.json());
app.use('/alumnos', RUTAS_ALUMNOS);
 

// Inicializacion del servidor
app.listen(process.env.PORT, ()=> {
  console.log(`Example app listening on port${process.env.PORT}`)
  dbConnect(); // recien ahi conectamos la base de datos
})