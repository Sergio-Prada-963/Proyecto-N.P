import {Schema,model} from "mongoose";

const CategoriaSchema = Schema({
    CategoriaNo:{type:String,required:[true],trim:true,unique:true},
    imgCategoria:{type:Image,required:[true],trim:true,unique:true}
},{timestamps:true});

const Categoria = model("categorias",CategoriaSchema);
export default Categoria;