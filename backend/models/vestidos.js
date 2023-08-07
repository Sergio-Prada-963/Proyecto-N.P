import { Schema,model } from "mongoose";
 const vestidoSchema = Schema({
    nombreV:{type:String,required:[true],trim:true,unique:true},
    categoriaV:{type:String,required:[true],trim:true},
    imgV:{type:String,required:[true],trim:true,unique:true},
    detallesV:{type:String,required:[true],trim:true},
    stock:{type:Number,trim:true,default:1},
    paraV:{type:String,required:[true],trim:true},
    precioV:{type:Number,required:[true],trim:true},
    estadoV:{type:String,trim:true,default:'Disponible'}
 },{timestamps:true});

 const Vestido = model("vestidos",vestidoSchema);
 export default Vestido;