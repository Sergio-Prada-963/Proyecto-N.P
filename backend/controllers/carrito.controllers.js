import Carrito from "../models/carrito.js";
import { response } from "express";

const getAll = async (req,res=response)=>{
    const {until,from} = req.query;
    const data = {usuario:req.usuario._id}
    const [total,carrito] = await Promise.all([
        Carrito.countDocuments(),
        Carrito.find(data)
            .populate('usuario')
            .populate('productos.producto')
            .skip(Number(from)).limit(Number(until))
    ]);
    res.json({total,carrito})
}
const postCarrito = async(req,res)=>{
    const data = {usuario:req.usuario._id}   
    console.log(data);
    const existeCarrito = Carrito.findById(data) 
    if(existeCarrito)
        return res.json({problemas:true});
    res.json({buenas: "no ahy"})
    //     return res.status(400).json({message: "El carrito de este usuario ya existe..."});
    // const newCarrito = new Carrito(data);
    // await newCarrito.save();
    //res.json(existeCarrito);
}
const addProduct = async(req,res)=>{
    const addProducto = await Carrito.findByIdAndUpdate({_id:req.params.id},{$push:{productos:[req.body]}},{new:true})
    res.json(addProducto);
}

const deleteCar = async(req,res)=>{
    await Carrito.findByIdAndDelete({_id:req.params.id});
    res.json({message:"Eliminadoo"})
} 
export {getAll, postCarrito, addProduct, deleteCar}