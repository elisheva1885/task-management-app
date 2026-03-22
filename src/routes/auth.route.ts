import express from 'express'
import { AuthController } from '../controllers/auth.controller.js'
import asyncHandler from '../middlewares/async-handler.middleware.js';
export const authRouter = express.Router()
const authController = new AuthController();

authRouter.post('/register', asyncHandler(authController.register));