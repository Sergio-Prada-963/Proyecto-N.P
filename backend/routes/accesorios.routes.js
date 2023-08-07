import {Router} from "express";
import { check } from "express-validator";
import validateDocuments from "../middlewares/validateDocuments.js";
import validJWT from "../middlewares/validate.jwt.js";
import tipeRole from '../middlewares/validate.role.js';
import {ExistAccesorio, existAccesorioImg, accesorioExistId} from '../helpers/db.validators.js';
import {getAll, postAccesorios, deleteAccesorios, putAccesorios} from "../controllers/accesorios.controllers.js";

const router = Router();

router.get("/",getAll);

router.post('/',[
    validJWT,
    tipeRole,
    check('nombre','No es un nombre valido').not().isEmpty(),
    check('imgAccesorio','No es una imagen valida').not().isEmpty(),
    check('nombre').custom(ExistAccesorio),
    check('imgAccesorio').custom(existAccesorioImg),
    check('aplicable','No es un valor valido para aplicable').not().isEmpty(),
    check('valorExtra','No es un valor aplicable').not().isEmpty(),
validateDocuments], postAccesorios);

router.delete('/:id',[
    validJWT,
    tipeRole,
    check('id','No es un id valido').isMongoId(),
    check('id').custom(accesorioExistId),
validateDocuments],deleteAccesorios);

router.put('/:id',[
    validJWT,
    tipeRole,
    check('nombre','No es un nombre valido').not().isEmpty(),
    check('imgAccesorio','No es una imagen valida').not().isEmpty(),
    check('aplicable','No es un valor valido para aplicable').not().isEmpty(),
    check('valorExtra','No es un valor aplicable').not().isEmpty(),
    check('id','No es un Id valido').isMongoId(),
    check('id').custom(accesorioExistId),
validateDocuments],putAccesorios)
 
export default router;