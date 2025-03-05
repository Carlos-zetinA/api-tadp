const express = require("express");
const cors = require("cors");

//importar rutas
const productoRoutes = require("./routes/producto.routes")

//config express
const app=express();

//Configuracion de cors 
app.use(cors())

//uso de las rutas 
app.use('./api',productoRoutes)

//Exportar express
module.exports=app;