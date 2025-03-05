const express =require("express");


const ProductosController=require("../controllers/productos.controller");


const api=express.Router();


api.post("/createproduct",ProductosController.createProducto);
api.get("/getproducto",ProductosController.getProducto);
api.put("/updateproducto",ProductosController.updateProducto);
api.delete("/delproducto",ProductosController.delProducto);

module.exports=api;