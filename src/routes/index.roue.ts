import express from 'express'
import { authRouter } from './auth.route.js'
export const indexRouter = express.Router()

indexRouter.use('/auth', authRouter )