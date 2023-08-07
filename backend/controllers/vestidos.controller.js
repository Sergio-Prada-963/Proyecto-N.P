import Vestido from "../models/vestidos.js";

const getAll = async(req,res) => {
    const vestidos = await Vestido.find();
    res.json(vestidos)      
}

const postVestidos = async(req,res)=>{
    const {nombreV, imgV} = req.body
    const existeNombre = await Vestido.findOne({nombreV});
    const existeImg = await Vestido.findOne({imgV});
    if(existeNombre)
        return res.status(400).json({message: "Nombre del vestido ya existente..."});
    if(existeImg)
        return res.status(400).json({message: "Img vestido ya existente..."});
    const newVestido = new Vestido(req.body);
    await newVestido.save();
    res.json(newVestido);
}

const deleteVestido = async (req,res)=>{
    await Vestido.findByIdAndDelete({_id:req.params.id});
    res.json({message:"eliminado"})
}

const putVestido = async(req,res)=>{
    const vestido = await Vestido.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
    res.json({message:"Vestido actualizado",vestido})
}

export {getAll, postVestidos, deleteVestido, putVestido}