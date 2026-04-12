import { AppDataSource } from "../db/data-source";
import type { CreateTaskRequestDto } from "../dto/create-task.dto";
import type { UpdataTaskRequestDto } from "../dto/task.dto";
import { HttpStatus } from "../constants/http-status.js";
import { Task } from "../entities/Task.entity.js";
import { AppError } from "../errors/app-errors.js";

const taskRepository = AppDataSource.getRepository(Task)

export class TaskService {
    async updateTask(taskData: UpdataTaskRequestDto, id: string, userId: string) {
        const task = await this.getTaskByTaskIdUserId(id,userId);
        task.title = taskData.title !== undefined ? taskData.title : task.title;
        task.description = taskData.description !== undefined ? taskData.description : task.description;
        task.priority = taskData.priority !== undefined ? taskData.priority : task.priority;
        if (taskData.deadline !== undefined) {
            const date = new Date(taskData.deadline);
            task.deadline = date;
        }
        await taskRepository.save(task);
        return task;
    }
	async getTaskByTaskIdUserId(id: string, userId: string): Promise<Task> {
		const task = await taskRepository.findOne({ where: { id, userId } })
		if (!task) {
			throw new AppError('Not Found', HttpStatus.BAD_REQUEST)
		}
		return task
	}

	async deleteTask(id: string, userId: string): Promise<void> {
		const task = await this.getTaskByTaskIdUserId(id, userId)
		await taskRepository.remove(task)
	}
	async addTask(data: CreateTaskRequestDto, userId: string): Promise<Task> {
		const deadline = new Date(data.deadline)
		if (isNaN(deadline.getTime())) {
			throw new AppError('invalid date', HttpStatus.BAD_REQUEST)
		}
		const task = taskRepository.create({ ...data, deadline, userId })
		await taskRepository.save(task)
		return task
	}
	async getAllUserTasks(userId: string): Promise<Task[]> {
		const tasks = await taskRepository.find({ where: { userId } })
		return tasks
	}

	async getTask(id: string, userId: string): Promise<Task> {
		const task = await this.getTaskByTaskIdUserId(id, userId)
		return task
	}
}
