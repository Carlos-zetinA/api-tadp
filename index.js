const mongoose=require("mongoose")
const app = require("./app");
const {DB_USER,
    DB_NAME,
    DB_PASSWORD,
    IP_SERVER,DB_PORT}=require("./constantes");


const port=process.env.PORT || 4000;

//Conexion al gestor de DB mongoDB
const uri='mongodb://${IP_SERVER}:${DB_PORT}/${DB_NAME}';
mongoose.set("strictQuery",false)
mongoose.connect(uri)
.then(mongoose=>console.log('conectado ala bd en el puerto 27017'))
.catch(err=>console.log(err));


app.listen(port,()=>{
    console.log("***********");
    console.log("*****API REST******");
    console.log("***********");
    console.log('http://127.0.0.1:4000/api');
    });
