import { Router } from "express";
import { check } from "express-validator";
import validJWT from "../middlewares/validate.jwt.js";
import tipeRole from "../middlewares/validate.role.js";
import validateDocuments from "../middlewares/validateDocuments.js";
import {existLista,existIdLista} from "../helpers/db.validators.js"
import {getAll, postLista, addProduct, deleteLIst} from "../controllers/cotizaciones.controllers.js";

const router = Router();

router.get('/',getAll);

router.post('/',[
    validJWT,
    check('nombreLista','No es un nombre valido').not().isEmpty(),
    check('nombreLista').custom(existLista),
validateDocuments],postLista)

router.patch('/:id',[
    validJWT,
    tipeRole,
    check('id','NO es un Id valido').isMongoId(),
    check('id').custom(existIdLista),
validateDocuments],addProduct);

router.delete('/:id',[ 
    validJWT,
    tipeRole,
    check('id').custom(existIdLista),
validateDocuments],deleteLIst)

export default router