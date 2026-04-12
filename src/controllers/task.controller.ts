import type { CreateTaskRequestDto } from "../dto/create-task.dto.js";
import { TaskService } from "../services/task.service.js";
import { type Response } from "express";
import type { AuthRequest } from "../types/auth.types.js";
import type { UpdataTaskRequestDto } from "../dto/task.dto.js";
import { HttpStatus } from '../constants/http-status.js';

const taskService = new TaskService()
export class TaskController {
     async updateTask(req: AuthRequest, res: Response) {
        const data: UpdataTaskRequestDto = req.body;
        const id = req.params.id as string;
        if (!id ) {
            return res.status(400).json({  message: "Task ID is required"  });
        }
        const userId = req.currentUser!.id
        const task = await taskService.updateTask(data, id, userId);
        return res.status(200).json(task);
    }

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
