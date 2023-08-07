import {Router} from "express";
import { check } from "express-validator";
import validateJWT from '../middlewares/validate.jwt.js';
import tipeRole from '../middlewares/validate.role.js';
import validateDocuments from "../middlewares/validateDocuments.js";
import {paraV, estadoV, categorias, vestidoExistsId} from '../helpers/db.validators.js';
import {getAll, postVestidos, deleteVestido, putVestido} from "../controllers/vestidos.controller.js";

const router = Router();

router.get("/",getAll);

router.post('/',[
    validateJWT,
    tipeRole,
    check('nombreV','Nombre no es valido').not().isEmpty(),
    check('imgV','Debe tener una imagen valida').not().isEmpty(),
    check('categoriaV').custom(categorias),
    check('paraV').custom(paraV),
    check('estadoV').custom(estadoV),
validateDocuments], postVestidos);

router.delete('/:id',[
    validateJWT,
    tipeRole,
    check('id','No es un id valido').isMongoId(),
    check('id').custom(vestidoExistsId),
validateDocuments],deleteVestido);

router.put('/:id',[
    validateJWT,
    tipeRole,
    check('id','No es un Id valido').isMongoId(),
    check('id').custom(vestidoExistsId),
validateDocuments],putVestido)

export default router;