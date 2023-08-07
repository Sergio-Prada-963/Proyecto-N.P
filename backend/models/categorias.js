import {Schema,model} from "mongoose";

const CategoriaSchema = Schema({
    categoriaV:{type:String,required:[true],trim:true},
    imgCategoria:{type:String,required:[true],trim:true,unique:true},
    detalles:{type:String,required:[true],trim:true},
},{timestamps:true});

const Categoria = model("categorias",CategoriaSchema);
export default Categoria;