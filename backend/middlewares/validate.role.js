const tipeRole = (req, res, next)=>{
    if(!req.usuario)
        return res.status(555).json({message: 'Se quiere verificar el role sin validar el token primero'});
    const {rol, nombre} = req.usuario;
    if(rol !== 'ADMIN')
        return res.status(550).json({message: `${nombre} No es administrador - no tiene permiso`});
    next();
}
export default tipeRole;