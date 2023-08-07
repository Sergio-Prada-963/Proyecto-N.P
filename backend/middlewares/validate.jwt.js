import { response, request } from "express";
import jwt from 'jsonwebtoken';
import User from '../models/usuarios.js';

const validJWT = async (req = request, res = response, next) =>{
    const {tokenX} = req.cookies;
    if(!tokenX)
        return res.status(400).json({message: "no hay token en la peticion"});
    try {
        const {uid} = jwt.verify(tokenX,process.env.SECRET_OR_PRIVATE_KEY);
        const usuario = await User.findById(uid);
        if(!usuario)
            return res.status(400).json({message: "Token no valido - Usuario no existe en la BD"});
        if(!usuario.estado)
            return res.status(400).json({message: "Token no valido - Usuario con estado false"});
        req.usuario = usuario;
        console.log("req usuario jwt",req.usuario);
        next();
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "jmmmm token no valido.. -_-"});
    }
}

export default validJWT