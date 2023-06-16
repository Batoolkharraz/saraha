import { Router } from "express";
import * as userCont from './controller/user.controller.js';
import auth from '../../MiddleWare/auth.middleware.js';
const router = Router();

router.get('/profile',auth,userCont.profile);
export default router;