import {Schema,model} from "mongoose";
const cuentasSchema = Schema({
    //vestidos
    nombreV:{type:String,required:[true],trim:true,unique:true},
    categoriaV:{type:String,required:[true],trim:true},
    imgV:{type:Image,required:[true],trim:true,unique:true},
    cantidad:{type:Number,trim:true,required:[true]},
    tipoCu:{type:String,required:[true],trim:true,enum:["Alquiler","Venta","Venta y Aquiler"]},
    precioV:{type:Number,required:[true],trim:true},
    fechaS:[{used:{type:Array},types:[{name:{type:String,trim:true}}]}],
    fechaY:[{used:{type:Array},types:[{name:{type:String,trim:true}}]}],
    //accesorios
    nombreAccesorio:{type:String,unique:true,trim:true},
    imgAccesorio:{type:Image,unique:true,trim:true},
    aplicable:{type:String,trim:true},
    valorExtra:{type:Number,default:0,trim:true}
},{timestamps:true})

const Cuentas = model("cuentas",cuentasSchema);
export default Cuentas