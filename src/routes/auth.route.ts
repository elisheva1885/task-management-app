import express from 'express'
import { AuthController } from '../controllers/auth.controller.js'
export const authRouter = express.Router()
const authController = new AuthController();

authRouter.post('/register', authController.register)
