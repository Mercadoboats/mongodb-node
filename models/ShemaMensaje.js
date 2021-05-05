const mongoose = require('mongoose');

const mensajesShema=new mongoose.Schema({

    email:{
        type:String,
        require:true,
        minlenght:3,
        trim:true,        
    },
    mensaje:{
        type:String,
        require:true,
    },
    timeStamp:{
        type:Date,
        default:Date.now()
    }

});

const Mensaje=mongoose.model('mensajes',mensajesShema);

module.exports=Mensaje;

