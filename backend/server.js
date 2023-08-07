import express  from "express";
import conectarDB from "./config/config.js";
import cors from "cors";

import login from './routes/login.routes.js';
import users from './routes/usuarios.routes.js';
import routerVestido from "./routes/vestidos.routes.js";
import routerCuentas from "./routes/cuentas.routes.js";
import routerCategorias from "./routes/categorias.routes.js";
import routerAccesorios from "./routes/accesorios.routes.js";
import routerCotizaciones from "./routes/cotizaciones.routes.js";
import cookieParser from "cookie-parser";
import routerUploads from "./routes/upload.routes.js";
import fileUpload from "express-fileupload";
import buscar from "./routes/search.routes.js";
 
class Server {
    constructor(){
        this.app = express();
        this.app.use(cookieParser())
        this.port = process.env.PORT;
        this.path = {
            loguin: '/api',
            usuarios: '/api/usuarios',
            vestidos: "/api/vestidos",
            cuentas: "/api/cuentas",
            categorias: "/api/categorias",
            accesorios: "/api/accesorios",
            cotizaciones: "/api/cotizaciones",
            uploads: "/api/uploads",
            search: '/api/search'
        };
        this.middlewares();
        this.conexion();
        this.routess();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(fileUpload({useTempFiles:true,tempFileDir:'/tmp/'}))
    }
    async conexion(){
        await conectarDB();
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor onlinee ${this.port}... :)`);
        }) 
    }
    routess(){
        this.app.use(this.path.loguin, login);
        this.app.use(this.path.usuarios, users);
        this.app.use(this.path.vestidos,routerVestido);
        this.app.use(this.path.cuentas,routerCuentas);
        this.app.use(this.path.categorias,routerCategorias);
        this.app.use(this.path.accesorios,routerAccesorios);
        this.app.use(this.path.cotizaciones,routerCotizaciones);
        this.app.use(this.path.uploads, routerUploads);
        this.app.use(this.path.search,buscar);
    }
}
export default Server;