import Cotizaciones from "../models/cotizaciones.js";
import { response } from "express";

const getAll = async (req,res=response)=>{
    const {until,from} = req.query;
    const [total,cotizaciones] = await Promise.all([
        Cotizaciones.countDocuments(),
        Cotizaciones.find()
            .populate('usuario')
            .populate('lista.producto')
            .skip(Number(from)).limit(Number(until))
    ]);
    res.json({total,cotizaciones})
}
const postLista = async(req,res)=>{
    const {nombreLista, lista} = req.body;
    const existeLista = await Cotizaciones.findOne({nombreLista});
    if(existeLista)
        return res.status(400).json({message: "El nombre de la lista ya existe"});
    const data = {nombreLista,lista,usuario:req.usuario._id}    
    const newLista = new Cotizaciones(data);
    await newLista.save();
    res.json(newLista);
}
const addProduct = async(req,res)=>{
    const addProducto = await Cotizaciones.findByIdAndUpdate({_id:req.params.id},{$push:{lista:[req.body]}},{new:true})
    res.json(addProducto);
}

const deleteLIst = async(req,res)=>{
    await Cotizaciones.findByIdAndDelete({_id:req.params.id});
    res.json({message:"Eliminadoo"})
} 
export {getAll, postLista, addProduct, deleteLIst}