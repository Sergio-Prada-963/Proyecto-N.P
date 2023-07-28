import {Router} from "express";
//import {check} from "express-validator";
import getAll from "../controllers/vestidos.controller.js";
//import Vestido from "../models/vestidos.js";
const routerVestido = Router();
routerVestido.get("/",getAll);

export default routerVestido;