import Rango from "../models/rango.js";
import User from "../models/usuarios.js";
import Categoria from "../models/categorias.js";
import Accesorios from "../models/accesorios.js";
import Vestido from "../models/vestidos.js";
import Cuentas from "../models/cuentas.js";
import Cotizaciones from "../models/cotizaciones.js";
import Carrito from "../models/carrito.js";

// validations Users
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
        throw new Error(`El id   ${id}   no existe`);
}

export {isValidRango, existeEmail, userExistsById};

//validations Vestidos
const paraV = async (paraV='')=>{
    const existePara = await Rango.findOne({paraV});
    if(!existePara)
        throw new Error(`El para ${paraV} no esta registrado en la BD solo se admiten (alquiler, venta, venta y alquiler)`);
}
const estadoV = async (estadoV='')=>{
    const existeEstado = await Rango.findOne({estadoV});
    if(!existeEstado)
        throw new Error(`El estado ${estadoV} no se permite`);
}
const categorias = async (categoriaV='')=>{
    const existeCategoria = await Categoria.findOne({categoriaV});
    if(!existeCategoria)
        throw new Error(`La categoria ${categoriaV} no se encuentra`);
}
const vestidoExistsId = async (_id)=>{
    const existeVestido = await Vestido.findById({_id});
    if(!existeVestido)
        throw new Error(`El id Vestido   ${_id}   no existe`)
}
export {paraV, estadoV, categorias, vestidoExistsId}

//Validations cuentas
const para = async (paraV='')=>{
    const existPara = await Rango.findOne({paraV});
    if(!existPara)
        throw new Error(`El para ${paraV} no esta registrado en la BD`);
}
const cuentaExistId = async (_id)=>{
    const existeCuenta = await Cuentas.findById({_id});
    if(!existeCuenta)
        throw new Error(`El id de la cuenta   ${_id}   no existe`);
}
const categoriaExistById = async (_id)=>{
    const existeCategoria = Categoria.findById({_id});
    if(!existeCategoria)
        throw new Error(`El id de la categoria ${_id}  no existe...`);
}
export {cuentaExistId, para, categoriaExistById}
//Validate Categorias
const existCategoria = async (categoriaV='')=>{
    const existeCategoria = await Categoria.findOne({categoriaV});
    if(existeCategoria)
        throw new Error(`La categoria ${categoriaV} ya existe`);
}
const existCategoriaImg = async (imgCategoria='')=>{
    const existeCategoria = await Categoria.findOne({imgCategoria});
    if(existeCategoria)
        throw new Error(`La imagen ${imgCategoria} de la categoria ya existe`);
}
export {existCategoria, existCategoriaImg}

//validation Accesorios
const ExistAccesorio = async (nombre='')=>{
    const existeAccesorio = await Accesorios.findOne({nombre});
    if(existeAccesorio)
        throw new Error(`El accesorio ${nombre} ya existe`);
}
const existAccesorioImg = async (imgAccesorio='')=>{
    const imgExist = await Accesorios.findOne({imgAccesorio})
    if(imgExist)
        throw new Error(`La imagen ${imgAccesorio} ya existe`);
}
const accesorioExistId = async (_id)=>{
    const accesorioId = await Accesorios.findById({_id})
    if(!accesorioId)
        throw new Error(`El Accesorio ${_id} No se encuentrra en la base de datos`);
}
export {ExistAccesorio, existAccesorioImg, accesorioExistId}

//Validations cotizaciones
const existLista = async (nombreLista='')=>{
    const listaExist = await Cotizaciones.findOne({nombreLista})
    if(listaExist)
        throw new Error(`La lista ${nombreLista} ya existe`);
}
const existIdLista = async (_id)=>{
    const existeIDLista = await Cotizaciones.findById({_id})
    if(!existeIDLista)
        throw new Error(`EL id ${_id} no existe`);
}
export {existLista, existIdLista}

//validate Carrito

const existCarrito = async (id)=>{
    const existeCarrito = await Carrito.findById({id})
    if(!existeCarrito)
        throw new Error(`EL id ${id} del carrito no existe`);
}
export {existCarrito}