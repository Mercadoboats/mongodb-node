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

