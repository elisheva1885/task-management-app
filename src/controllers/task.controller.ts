import type { CreateTaskRequestDto } from '../dto/create-task.dto.js'
import { TaskService } from '../services/task.service.js'
import { type Response } from 'express'
// import type { Request } from "../types/auth.types.js";
import { HttpStatus } from '../constants/http-status.js'
import type { AuthRequest } from '../types/auth.types.js'

const taskService = new TaskService()
export class TaskController {
	async deleteTask(req: AuthRequest, res: Response): Promise<Response> {
		const taskId = req.params.id as string
		if (!req.currentUser) {
			return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Unauthorized' })
		}
		const userId = req.currentUser.id
		await taskService.deleteTask(taskId, userId)
		return res.status(HttpStatus.NO_CONTENT).send()
	}
	async addTask(req: AuthRequest, res: Response): Promise<Response> {
		const data: CreateTaskRequestDto = req.body
		const userId = req.currentUser.id
		const task = await taskService.addTask(data, userId)
		return res.status(HttpStatus.CREATED).json(task)
	}
	async getAllTasks(req: AuthRequest, res: Response): Promise<Response> {
		const userId = req.currentUser.id
		const tasks = await taskService.getAllUserTasks(userId)
		if (tasks.length === 0) {
			return res.status(HttpStatus.OK).json({ message: 'you dont have any tasks yet' })
		}
		return res.status(HttpStatus.OK).json(tasks)
	}

	async getTask(req: AuthRequest, res: Response): Promise<Response> {
		const taskId = req.params.id as string
		if (!taskId) {
			return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Task ID is required' })
		}
		const userId = req.currentUser.id
		const task = await taskService.getTask(taskId, userId)
		return res.status(200).json(task)
	}
}
