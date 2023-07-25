const Usuario = require('../models/usuarios.js');
const bcryptjs = require('bcryptjs');
const obtenerUsuarios = async(req,res)=>{
    try {
        const usuario = await Usuario.find();
        res.json(usuario)
    } catch (error) {
        console.log(error);
    }
}
const agregarCategoria = async (req, res)=>{
    const categoria = new Categoria(req.body);
    try {
        const nuevaCategoria = await categoria.save();
        res.json(nuevaCategoria);
    } catch (error) {
        console.log(error);
    }
} 
const deleteUsuario = async (req,res)=>{
    try {
        await Usuario.deleteOne({_id:req.params.id});
        res.send({message:"eliminado con exito"})
    } catch (error) {
        console.log(error);
        res.status(333) 
        res.send({error: "usuario no eliminado"})
    }
}
const updateUsuario = async(req,res) =>{
    try {
        const usuario = await Usuario.findOneAndUpdate({_id: req.params.id},req.body,{new:true});
        res.json(usuario)
    } catch (error) {
        console.log(error);
        res.status(333)
    }
}
module.exports = {obtenerUsuarios, agregarUsuarios, deleteUsuario, updateUsuario};