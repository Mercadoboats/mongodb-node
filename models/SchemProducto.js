const mongoose = require('mongoose');

const productoShema=new mongoose.Schema({

    nombre:{
        type:String,
        require:true,
        trim: true, //Sacar Espacios
        minlenght:3,
        maxlenght:60,
        
    },
    descripcion:{
        type:String,
        require:true,
        trim:true,
        minlenght:10,
        maxlenght:70,
            
    },
    codigo:{
        type:Number,
        require:true
    },
    url:{
        type:String,
        require:true
    },
    price:{
        type:Number,
    },
    stock:{
        type:Number

    },
    timeStamp:{
        type:Date,
        default:Date.now()
    }
    
});

const Producto=mongoose.model('productos',productoShema);
module.exports=Producto;

