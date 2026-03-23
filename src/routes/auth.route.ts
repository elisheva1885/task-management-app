import express from 'express'
import { AuthController } from '../controllers/auth.controller.js'
import asyncHandler from '../middlewares/async-handler.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { registerSchema } from '../schemas/auth.schema.js';
export const authRouter = express.Router()
const authController = new AuthController();

authRouter.post('/register',validate(registerSchema) ,asyncHandler(authController.register));