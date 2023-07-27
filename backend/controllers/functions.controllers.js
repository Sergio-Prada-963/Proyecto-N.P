const getAll = async(req,res,variable,modelo) =>{
    try {
        const variable = await modelo.find();
        res.json(variable);
    } catch (error) {
        console.log("no funshion :(", error);
        res.status(404).send({error:`${variable} no found`});
    }
}

export default getAll