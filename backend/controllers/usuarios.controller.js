import User from "../models/usuarios.js";
import bcryptjs from 'bcryptjs';

const getUser = async (req,res)=>{
    const {hasta, desde} = req.query;
    const query = {estado:true};
    const [total, usuarios] = await Promise.all([
        User.countDocuments(query),
        User.find(query).skip(Number(desde)).limit(Number(hasta))
    ]);
    res.json({total,usuarios});
};

const postUser = async (req,res)=>{
    const {email,imgUser,password,username} = req.body
    const existEmail = await User.findOne({email});
    const existimgUser = await User.findOne({imgUser});
    const existUsername = await User.findOne({username});
    if(existEmail)
        return res.status(400).json({message: "Email ya existente..."});
    if(existimgUser)
        return res.status(400).json({message: "La imagen ya se encuentra en uso..."});
    if(existUsername)
        return res.status(400).json({message: "UserName ya existente..."});
    const newUser = new User(req.body);
    const salt = bcryptjs.genSaltSync();
    newUser.password = bcryptjs.hashSync(password,salt);
    await newUser.save();
    res.json(newUser);
}

const deleteUser = async (req,res)=>{
    const {id} = req.params;
    const usuario = await User.findByIdAndUpdate(id,{estado:false});
    res.json(usuario);
}

const putUser = async (req,res)=>{
    const {id} = req.params;
    const {_id, password, googleSignIn, ...resto} = req.body;
    if(password){
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password,salt);
    }
    const user = await User.findByIdAndUpdate(id, resto, {new:true});
    res.json({msg: "Usuario Actualizado", user});
}

/* const updateUser = async (req,res)=>{
    try {
        const user = await User.findOneAndUpdate({_id:req.params},req.body,{new:true});
        res.json(user)
    } catch (error) {
        console.log("no funshion :( " , error);
    }
} */

export {getUser, postUser, deleteUser, putUser}