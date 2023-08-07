import {Router} from "express";
import { check } from "express-validator";
import validateDocuments from "../middlewares/validateDocuments.js";
import validJWT from "../middlewares/validate.jwt.js";
import tipeRole from '../middlewares/validate.role.js';
import {categoriaExistById, existCategoria, existCategoriaImg} from '../helpers/db.validators.js';
import {getAll, postCategorias, deleteCategorias, putCategorias} from '../controllers/categorias.controllers.js'

const router = Router();

router.get("/",getAll);

router.post('/',[
    validJWT,
    tipeRole,
    check('categoriaV','No es un nombre valido').not().isEmpty(),
    check('categoriaV').custom(existCategoria),
    check('imgCategoria','no es una imagen valida').not().isEmpty(),
    check('imgCategoria').custom(existCategoriaImg),
    check('detalles','No es un detalle valido').not().isEmpty(),
validateDocuments], postCategorias);

router.delete('/:id',[
    validJWT,
    tipeRole,
    check('id','No es un id valido').isMongoId(),
    check('id').custom(categoriaExistById),
validateDocuments],deleteCategorias);

router.put('/:id',[
    validJWT,
    tipeRole,
    check('categoriaV','No es un nombre valido').not().isEmpty(),
    check('imgCategoria','no es una imagen valida').not().isEmpty(),
    check('detalles','No es un detalle valido').not().isEmpty(),
validateDocuments],putCategorias)
 
export default router;