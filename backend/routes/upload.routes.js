import { Router } from 'express';
import {check} from 'express-validator'
import validateJWT from '../middlewares/validate.jwt.js';
import tipeRole from '../middlewares/validate.role.js';
//import validateDocuments from '../middlewares/validate.documents'
import uploadFile from '../controllers/upload.controller.js';


const router = Router();

router.post( '/',[validateJWT,tipeRole], uploadFile );

export default router