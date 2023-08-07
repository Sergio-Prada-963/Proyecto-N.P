import { Router } from 'express';
import {check} from 'express-validator';
import validateDocuments from '../middlewares/validateDocuments.js';
import validateJWT from '../middlewares/validate.jwt.js';
import tipeRole from '../middlewares/validate.role.js';
import {isValidRango, existeEmail, userExistsById} from '../helpers/db.validators.js';
import {getUser, getUserEmail, postUser, deleteUser, putUser} from '../controllers/usuarios.controller.js';
const router = Router();

router.get('/',getUser);
router.post('/buscar',[
    check('email','no es email valido').not().isEmpty(),
validateDocuments],getUserEmail)
router.post('/',[
    check('username', 'Nombre no es valido').not().isEmpty(),
    check('password','Contraseña de min 6 caracteres').isLength({min:6}),
    check('email', 'El email no es valido').isEmail(),
    check('email').custom(existeEmail),
validateDocuments],postUser);

router.delete('/:id',[
    validateJWT,
    tipeRole,
    check('id','No es un Id valido').isMongoId(),
    check('id').custom(userExistsById),
validateDocuments],deleteUser);

router.put('/:id',[
    validateJWT,
    tipeRole,
    check('id','No es un ObjectID mongo valido').isMongoId(),
    check('id').custom(userExistsById),
    check('rango').custom(isValidRango),
validateDocuments], putUser)

export default router