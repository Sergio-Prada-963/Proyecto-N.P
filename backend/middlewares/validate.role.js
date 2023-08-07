const tipeRole = (req, res, next)=>{
    if(!req.usuario)
        return res.status(555).json({message: 'Se quiere verificar el role sin validar el token primero'});
    const {rango, username} = req.usuario;
    if(rango !== 'ADMIN')
        return res.status(550).json({message: `${username} No es administrador - no tiene permiso`});
    next();
}
export default tipeRole;