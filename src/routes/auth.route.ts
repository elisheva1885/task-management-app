import express from 'express'
import { AuthController } from '../controllers/auth.controller.js'
import  asyncHandler  from '../middlewares/async-handler.middleware.js';
export const authRouter = express.Router()
const authController = new AuthController();

authRouter.post('/login', asyncHandler((req,res)=> authController.login(req,res)));
