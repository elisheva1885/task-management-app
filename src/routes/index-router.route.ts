import express from 'express'
import { authRouter } from './auth.route.js'
import { taskRouter } from './task.route.js'
export const indexRouter = express.Router()

indexRouter.use('/auth', authRouter )
indexRouter.use("/tasks", taskRouter)
