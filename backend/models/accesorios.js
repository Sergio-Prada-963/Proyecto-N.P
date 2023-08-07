import {Schema,model} from "mongoose";

const accesorioSchema = Schema({
    nombre:{type:String,required:[true],unique:true,trim:true},
    imgAccesorio:{type:String,required:[true],unique:true,trim:true},
    aplicable:{type:String,required:[true],trim:true},
    valorExtra:{type:Number,default:0,trim:true}
},{timestamps:true})

const Accesorios = model("accesorios",accesorioSchema);
export default Accesorios;