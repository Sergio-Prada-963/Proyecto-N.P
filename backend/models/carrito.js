import { Schema,model } from "mongoose";

const carritoSchema = Schema({
    usuario:{type:Schema.Types.ObjectId,ref:'usuarios',required:[true]},
    productos:[{producto:{type:Schema.Types.ObjectId,ref:'vestidos'}}]
},{timestamps:true})
carritoSchema.methods.toJSON = function(){
    const {__v, estado, ...data} = this.toObject();
    return data;
}
const Carrito = model("carritos",carritoSchema);
export default Carrito