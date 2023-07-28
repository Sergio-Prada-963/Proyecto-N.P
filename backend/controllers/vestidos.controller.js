import Vestido from "../models/vestidos.js";

const getAll = async(req,res) => {
    console.log("nadita");
    try {
        const vestidos = await Vestido.find();
        res.json(vestidos)      
    } catch (error) {
        console.log("no funshion :(", error)
        res.status(404).send({error:"vestidos no found"})
    }
}
export default getAll 