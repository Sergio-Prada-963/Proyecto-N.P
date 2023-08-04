import { Router } from "express";
import { check } from "express-validator";
import login from "../controllers/login.controllers.js";
import validateDocuments from "../middlewares/validateDocuments.js";

const router = Router();

router.post('/login',[
    check('email','El email es obligatorio').isEmail(),
    check('password','El password es obligatorio').not().isEmpty(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
validateDocuments], login);

export default router