import express  from "express";
import conectarDB from "./config/config.js";
import cors from "cors";
import routerVestido from "./routes/vestidos.routes.js";
import routerUploads from "./routes/upload.routes.js";
import fileUpload from "express-fileupload";
import buscar from "./routes/search.routes.js";
class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            vestidos: "/api/vestidos",
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
        this.app.use(this.path.vestidos,routerVestido);
        this.app.use(this.path.uploads, routerUploads);
        this.app.use(this.path.search,buscar);
    }
}
export default Server;