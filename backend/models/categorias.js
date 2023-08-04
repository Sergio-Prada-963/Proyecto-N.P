import {Schema,model} from "mongoose";

const CategoriaSchema = Schema({
    CategoriaNo:{type:String,required:[true],trim:true,unique:true},
    imgCategoria:{type:String,required:[true],trim:true,unique:true},
    detalles:{type:String,required:[true],trim:true},
    stock:{type:Number,required:[true],trim:true}
},{timestamps:true});

const Categoria = model("categorias",CategoriaSchema);
export default Categoria;