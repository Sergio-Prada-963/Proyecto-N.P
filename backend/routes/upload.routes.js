import { Router } from 'express';
import {check} from 'express-validator'

//import validateDocuments from '../middlewares/validate.documents'
import uploadFile from '../controllers/upload.controller.js';


const router = Router();

router.post( '/', uploadFile );

export default router