const express=require('express');
const app=express();
const fakerProductos=require('./faker/productos')
const PORT=3030;



const mongoose = require('mongoose');
const ArregloProductos=require('./ArregloProductos');
const ArregloMensajes=require('./ArregloMensajes');
const Producto=require('./models/SchemProducto');
const Mensaje=require('./models/ShemaMensaje');


mongoose.connect('mongodb://localhost:27017/ecommerce',{useNewUrlParser:true})
.then(()=>console.log('conectado a Mongo'))
.catch(error=>console.log('Error al conectar'))
.finally(async()=>{
    const producto=new Producto(ArregloProductos);
    const result=await producto.save();

    const mensaje=new Mensaje(ArregloMensajes);
    const resultm=await mensaje.save();
});

app.get('/productos/vista-test',(req,res)=>{
    const cant=req.query.cant || 10;
    const arreglo=[];

    if(cant != 0)
    {
    for (let i=0;i<cant;i++)
    {
        const productos = fakerProductos.get();
        arreglo.push(productos);

    }

    res.status(200).send(arreglo);
   }else{
       res.status(400).send('No hay productos cargados')

   }
   
});

const server=app.listen(PORT,()=>{console.log(`El servidor esta corriendo en: ${PORT}`)})
.on(`error`,error=>{console.log(`error:${error}`)});