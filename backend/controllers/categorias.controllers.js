import Categoria from "../models/categorias.js";

const getAll = async(req,res) => {
    const categorias = await Categoria.find();
    res.json(categorias)      
}

const postCategorias = async(req,res)=>{
    const {categoriaV, imgCategoria} = req.body
    const existCategoria = await Categoria.findOne({categoriaV});
    const existImg = await Categoria.findOne({imgCategoria});
    if(existCategoria)
        return res.status(400).json({message: "El nombre de esta categoria ya existe..."});
    if(existImg)
        return res.status(400).json({message: "Esa imagen ya existe..."});
    const categoria = new Categoria(req.body);
    await categoria.save()
    res.json(categoria);
}

const deleteCategorias = async (req,res)=>{
    await Categoria.findByIdAndDelete({_id:req.params.id});
    res.json({message:"eliminado"});
}

const putCategorias = async(req,res)=>{
    const {categoriaV, imgCategoria} = req.body
    const existCategoria = await Categoria.findOne({categoriaV});
    const existImg = await Categoria.findOne({imgCategoria});
    if(existCategoria)
        return res.status(400).json({message: "El nombre de esta categoria ya existe..."});
    if(existImg)
        return res.status(400).json({message: "Esa imagen ya existe..."});
    const categoria = await Categoria.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
    res.json({message:"Categoria actualizada",categoria});
}

export {getAll, postCategorias, deleteCategorias, putCategorias}