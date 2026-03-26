import { AppDataSource } from "../db/data-source.js";
import type { TaskResponseDto } from "../dto/task.tdo.js";
import { Task } from "../entities/Task.entity.js";
import { AppError } from "../errors/app-errors.js";

const taskRepository = AppDataSource.getRepository(Task);

export class TaskService {
    async getTaskByTaskIdUserId(id: string, userId: string): Promise<Task> {
        const task = await taskRepository.findOne({ where: { id, userId } });
        if (!task) {
            throw new AppError("Not Found", 404);
        }
        return task;
    };

    async deleteTask(id: string, userId: string): Promise<void> {
        const task = await this.getTaskByTaskIdUserId(id, userId);
        await taskRepository.remove(task);
    }
    async getAllUserTasks(userId: string): Promise<TaskResponseDto[]> {
        const tasks = await taskRepository.find(
            { where: { userId } }
        );
        const tasksResponse = tasks.map((task) => {
            const { id, title, description, priority, deadline } = task;
            const taskResponse: TaskResponseDto = {
                id,
                title,
                description,
                priority,
                deadline
            }
            return taskResponse;
        })
        return tasksResponse;
    }
}