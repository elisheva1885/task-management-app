import express from 'express'
import { taskRouter } from './task.route'
import {authRouter} from './auth.route.ts'
export const indexRouter = express.Router()

indexRouter.use('/auth', authRouter )
indexRouter.use('/tasks',taskRouter )
