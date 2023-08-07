import {Router} from "express";
import { check } from "express-validator";
import validateDocuments from "../middlewares/validateDocuments.js";
import validJWT from "../middlewares/validate.jwt.js";
import tipeRole from '../middlewares/validate.role.js';
import {cuentaExistId, para, categoriaExistById} from '../helpers/db.validators.js';
import {getAll, postCuentas, deleteCuentas, putCuentas} from "../controllers/cuentas.controllers.js";

const router = Router();

router.get("/",getAll);

router.post('/',[
    validJWT,
    tipeRole,
    check('nombreV','No es un nombre valido').not().isEmpty(),
    check('cantidad','no es una cantidad valida').not().isEmpty(),
    check('para').custom(para),
    check('categoria','NO es un Id valido').isMongoId(),
    check('categoria').custom(categoriaExistById),
validateDocuments], postCuentas);

router.delete('/:id',[
    validJWT,
    tipeRole,
    check('id','No es un id valido').isMongoId(),
    check('id').custom(cuentaExistId),
validateDocuments],deleteCuentas);

router.put('/:id',[
    validJWT,
    tipeRole,
    check('nombreV','No es un nombre valido').not().isEmpty(),
    check('cantidad','no es una cantidad valida').not().isEmpty(),
    check('para').custom(para),
    check('categoria').custom(categoriaExistById),
    check('id','No es un Id valido').isMongoId(),
    check('id').custom(cuentaExistId),
validateDocuments],putCuentas)
 
export default router;