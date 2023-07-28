import express  from "express";
import conectarDB from "./config/config.js";
import cors from "cors";
import routerVestido from "./routes/vestidos.routes.js";

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.vestidosPath = "/api/vestidos";
        this.middlewares();
        this.conexion();
        this.routess();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
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
        this.app.use(this.vestidosPath,routerVestido);
    }
}
export default Server;