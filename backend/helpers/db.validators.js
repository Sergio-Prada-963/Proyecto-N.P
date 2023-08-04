import Rango from "../models/rango.js";
import User from "../models/usuarios.js";
import Categoria from "../models/categorias.js";

const isValidRango = async (rango='')=>{
    const existsRol = await Rango.findOne({rango});
    if(!existsRol)
        throw new Error(`El Rango ${rango} no esta registrado en la BD`);
}
const existeEmail = async (email='')=>{
    const existsEmail = await User.findOne({email});
    if(existsEmail)
        return new Error(`El email ${email} ya se encuantra registrado...`);
}
const userExistsById = async (id)=>{
    const existUser = await User.findById({id});
    if(!existUser)
        throw new Error(`El id   ${id}   no existe`)
}

export {isValidRango, existeEmail, userExistsById};