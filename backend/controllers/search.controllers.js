import { response } from 'express';
import { Types } from 'mongoose';
const objectId = Types.ObjectId;

import Accesorios from '../models/accesorios.js';
import Categoria from '../models/categorias.js';
import Cotizaciones from '../models/cotizaciones.js';
import Cuentas from '../models/cuentas.js';
import User from '../models/usuarios.js';
import Vestido from '../models/vestidos.js';

const allowedCollections = [
    'accesorios',
    'categoria',
    'cotizaciones',
    'cuentas',
    'usuarios',
    'vestidos'
]

const searchUsers = async( criterio = '', res = response ) => {
    const isMongoID = objectId.isValid( criterio ); // TRUE 
    if ( isMongoID ) {
        const usuario = await User.findById(criterio);
        return res.json({
            results: ( usuario ) ? [ usuario ] : []
        });
    }
    const regex = new RegExp( criterio, 'i' );
    const usuarios = await User.find({
        $or: [{ username: regex }, { email: regex }, {rango: regex}],
        $and: [{ estado: true }]
    });
    res.json({
        results: usuarios
    });
}

const searchCategorias = async( criterio = '', res = response ) => {
    const isMongoID = objectId.isValid( criterio ); // TRUE 
    if ( isMongoID ) {
        const categoria = await Categoria.findById(criterio);
        return res.json({
            results: ( categoria ) ? [ categoria ] : []
        });
    }
    const regex = new RegExp( criterio, 'i' );
    const categorias = await Categoria.find({ categoriaV: regex});
    res.json({
        results: categorias
    });
}

const searchVestidos = async( criterio = '', res = response ) => {
    const isMongoID = objectId.isValid( criterio ); // TRUE 
    if ( isMongoID ) {
        const vestido = await Vestido.findById(criterio);
        return res.json({
            results: ( vestido ) ? [ vestido ] : []
        });
    }
    const regex = new RegExp( criterio, 'i' );
    const vestidos = await Vestido.find({ categoriaV: regex, estadoV: "disponible" })
    res.json({
        results: vestidos
    });
}

const searchCuentas = async( criterio = '', res = response ) => {
    const isMongoID = objectId.isValid( criterio ); // TRUE 
    if ( isMongoID ) {
        const cuenta = await Cuentas.findById(criterio).populate('categoria','nombre').populate('usuario','username');
        return res.json({
            results: ( cuenta ) ? [ cuenta ] : []
        });
    }
    const regex = new RegExp( criterio, 'i' );
    const cuentas = await Cuentas.find({
        $or: [{ nombreV: regex }],
        $and: [{ precio: regex }]
    }).populate('categoria','nombre').populate('usuario','username')
    res.json({
        results: cuentas
    });
}

const searchCotizaciones = async( criterio = '', res = response ) => {
    const isMongoID = objectId.isValid( criterio ); // TRUE 
    if ( isMongoID ) {
        const cotizacion = await Cotizaciones.findById(criterio).populate('usuario');
        return res.json({
            results: ( cotizacion ) ? [ cotizacion ] : []
        });
    }
    const regex = new RegExp( criterio, 'i' );
    const cotizaciones = await Cotizaciones.find({
        $or: [{ nombreLista: regex }],
        $and: [{ usuario: regex }]
    }).populate('usuario').populate('lista.producto')
    res.json({
        results: cotizaciones
    });
}

const searchAccesorios = async( criterio = '', res = response ) => {
    const isMongoID = objectId.isValid( criterio ); // TRUE 
    if ( isMongoID ) {
        const accesorio = await Accesorios.findById(criterio);
        return res.json({
            results: ( accesorio ) ? [ accesorio ] : []
        });
    }
    const regex = new RegExp( criterio, 'i' );
    const accesorios = await Accesorios.find({
        $or: [{ nombre: regex }],
        $and: [{ valorExtra: regex }]
    })
    res.json({
        results: accesorios
    });
}

const search = ( req, res = response ) => {
    const { coleccion, criterio  } = req.params;
    if (!allowedCollections.includes(coleccion)){
        return res.status(400).json({
            msg: `El buscador solo permite las colecciones: ${allowedCollections}`
        })
    }
    switch (coleccion) {
        case 'usuarios':
            searchUsers(criterio, res);
        break;
        case 'vestidos':
            searchVestidos(criterio, res);
        break;
        case 'categorias':
            searchCategorias(criterio,res);
        break;
        case 'cuentas':
            searchCuentas(criterio,res);
        break;
        case 'cotizaciones':
            searchCotizaciones(criterio,res);
        break;
        case 'accesorios':
            searchAccesorios(criterio,res);
        break;
        default:
            res.status(500).json({msg: 'This search doesnt exists'})
    }
}

export default search;