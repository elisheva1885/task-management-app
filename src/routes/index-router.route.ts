import express from 'express'
import { taskRouter } from './task.route.js'
import {authRouter} from './auth.route.js'
export const indexRouter = express.Router()

indexRouter.use('/auth', authRouter )
indexRouter.use('/tasks',taskRouter )
