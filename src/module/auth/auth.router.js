import { Router } from "express";
import * as authCont from './controller/auth.controller.js';
import { asyncHandler } from "../../Services/errorHandling.js";
const router = Router();

router.post('/signup',asyncHandler(authCont.signup));
router.post('/signin',asyncHandler(authCont.signin));
export default router;