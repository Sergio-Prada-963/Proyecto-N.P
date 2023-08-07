import { Schema,model } from "mongoose";

const cotizacionSchema = Schema({
    nombreLista:{type:String,trim:true,required:[true]},
    usuario:{type:Schema.Types.ObjectId,ref:'usuarios',required:[true]},
    lista:[{producto:{type:Schema.Types.ObjectId,ref:'vestidos'}}]
},{timestamps:true})
cotizacionSchema.methods.toJSON = function(){
    const {__v, estado, ...data} = this.toObject();
    return data;
}
const Cotizaciones = model("cotizaciones",cotizacionSchema);
export default Cotizaciones