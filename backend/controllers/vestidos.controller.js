import Vestido from "../models/vestidos.js";
import getAll from "./functions.controllers.js";

getAll(req,res,vestido,Vestido)

/* const getVestidos = async(req,res) => {
    try {
        const vestidos = await Vestido.find()        
    } catch (error) {
        console.log("no funshion :(", error)
        res.status(404).send({error:"vestidos o found"})
    }
} */