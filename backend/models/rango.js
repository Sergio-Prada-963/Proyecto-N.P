import { Schema, model } from "mongoose";
const RangoSchema = Schema({
    rango:{type:String,required:[true,'El rol es requerido']},
    paraV:{type:String,required:[true,'El rol es requerido']},
    estadoV:{type:String,required:[true,'El rol es requerido']}
});
const Rango = model('rangos',RangoSchema);
export default Rango;