import express from 'express'
import { AuthController } from '../controllers/auth.controller.js'
const authRouter = express.Router()

authRouter.post('/register', AuthController.signup)
authRouter.post('login', AuthController.login)
