import { Schema,model } from "mongoose";
 const vestidoSchema = Schema({
    nombreV:{type:String,required:[true],trim:true,unique:true},
    categoriaV:{type:String,required:[true],trim:true},
    imgV:{type:Image,required:[true],trim:true,unique:true},
    detallesV:{type:String,required:[true],trim:true},
    aplicacionesV:{type:String,required:[true],trim:true},
    stock:{type:Number,trim:true,default:1},
    paraV:{type:String,required:[true],trim:true,enum:["Alquiler","Venta","Venta y Aquiler"]},
    precioV:{type:Number,required:[true],trim:true},
    estadoV:{type:String,trim:true,default:'Disponible',enum:["Disponible","Alquilado"]},
    fechaS:[{used:{type:Array},types:[{name:{type:String}}]}],
    fechaY:[{used:{type:Array},types:[{name:{type:String}}]}]
 },{timestamps:true});

 const Vestido = model("vestidos",vestidoSchema);
 export default Vestido;