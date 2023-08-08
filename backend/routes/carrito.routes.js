import { Router } from "express";
import { check } from "express-validator";
import validJWT from "../middlewares/validate.jwt.js";
import validateDocuments from "../middlewares/validateDocuments.js";
import {existCarrito} from "../helpers/db.validators.js"
import {getAll, postCarrito, addProduct, deleteCar} from "../controllers/carrito.controllers.js";

const router = Router();

router.get('/',[validJWT],getAll);

router.post('/',[
    validJWT,
validateDocuments],postCarrito)

router.patch('/:id',[
    validJWT,
    check('id','NO es un Id valido').isMongoId(),
validateDocuments],addProduct);

router.delete('/:id',[ 
    validJWT,
    check('id').custom(existCarrito),
validateDocuments],deleteCar)

export default router