import {Schema,model} from "mongoose";
const cuentasSchema = Schema({
    nombreV:{type:String,required:[true],trim:true},
    categoriaV:{type:String,required:[true],trim:true},
    imgV:{type:String,required:[true],trim:true},
    cantidad:{type:Number,trim:true,required:[true]},
    precioV:{type:Number,required:[true],trim:true},
    para:{type:String,required:[true],trim:true},
    fechaS:[{used:{type:Array},types:[{name:{type:String,trim:true}}]}],
    fechaY:[{used:{type:Array},types:[{name:{type:String,trim:true}}]}],
    usuario:{type:Schema.Types.ObjectId,ref:'usuarios',required:[true]},
    categoria:{type:Schema.Types.ObjectId,ref:'categorias',}
},{timestamps:true})
cuentasSchema.methods.toJSON = function() {
    const { __v, estado, ...data  } = this.toObject();
    return data;
}
const Cuentas = model("cuentas",cuentasSchema);
export default Cuentas