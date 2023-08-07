import Accesorios from "../models/accesorios.js";

const getAll = async(req,res) => {
    const accesorio = await Accesorios.find();
    res.json(accesorio)      
}

const postAccesorios = async(req,res)=>{
    const {nombre} = req.body
    const existNombre = await Accesorios.findOne({nombre});
    if(existNombre)
        return res.status(400).json({message: "El nombre de este accesorio ya existe..."});
    const accesorio = new Accesorios(req.body);
    await accesorio.save()
    res.json(accesorio);
}

const deleteAccesorios = async (req,res)=>{
    await Accesorios.findByIdAndDelete({_id:req.params.id});
    res.json({message:"eliminado"})
}

const putAccesorios = async(req,res)=>{
    const accesorios = await Accesorios.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
    res.json({message:"Accesorio actualizado",accesorios})
}

export {getAll, postAccesorios, deleteAccesorios, putAccesorios}