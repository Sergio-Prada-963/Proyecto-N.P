import Cuentas from "../models/cuentas.js";
import { response } from "express";
const getAll = async(req,res=response) => {
    const { until, from } = req.query;
    const [ total, cuentas ] = await Promise.all([
        Cuentas.countDocuments(),
        Cuentas.find()
            .populate('usuario', 'username')
            .populate('categoria', 'categoriaV')
            .skip( Number( from ) )
            .limit(Number( until ))
    ]);
    res.json({
        total,
        cuentas
    });     
}

const postCuentas = async(req,res)=>{
    const {nombreV, ...resto} = req.body
    const data = {nombreV, ...resto, usuario: req.usuario._id}
    const newcuenta = new Cuentas(data);
    await newcuenta.save();
    res.json(newcuenta);
}

const deleteCuentas = async (req,res)=>{
    await Cuentas.findByIdAndDelete({_id:req.params.id});
    res.json({message:"eliminado"})
}

const putCuentas = async(req,res)=>{
    const cuenta = await Cuentas.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
    res.json({message:"Cuenta actualizada",cuenta})
}

export {getAll, postCuentas, deleteCuentas, putCuentas}