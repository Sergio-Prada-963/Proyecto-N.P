import User from "../models/usuarios";
import bcryptjs from 'bcryptjs';

const getUser = async (req,res)=>{
    try {
        const usuario = await User.find();
        res.json(usuario)
    } catch (error) {
        console.log("no funshion :( " , error);
    }
};

const addUser = async (req,res)=>{
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
    const newUser = req.body;
    const salt = bcryptjs.genSaltSync();
    newUser.password = bcryptjs.hashSync(password,salt);
    await newUser.save();
    res.json(newUser);
}

const putUser = async (req,res)=>{
    const {id} = req.params;
    const {_id, password, googleSignIn, ...resto} = req.body;
    if(password){
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password,salt);
    }
    const user = await User.findByIdAndUpdate(id, resto);
    res.json({msg: "Usuario Actualizado", user});
}

const updateUser = async (req,res)=>{
    try {
        const user = await User.findOneAndUpdate({_id:req.params},req.body,{new:true});
        res.json(user)
    } catch (error) {
        console.log("no funshion :( " , error);
    }
}

export {getUser, addUser, putUser, updateUser}