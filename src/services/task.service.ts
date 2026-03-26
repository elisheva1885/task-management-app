import { AppDataSource } from "../db/data-source.js";
import type { TaskResponseDto } from "../dto/task.tdo.js";
import { Task } from "../entities/Task.entity.js";
import { AppError } from "../errors/app-errors.js";

const taskRepository = AppDataSource.getRepository(Task);

export class TaskService {
    getTaskByTaskIdUserId = async (id: string, userId: string): Promise<Task> => {
        const task = await taskRepository.findOne({ where: { id } });
        if (!task) {
            throw new AppError("Task not found", 404);
        }
        if (task.userId !== userId) {
            throw new AppError("Forbidden", 403);
        }
        return task;
    };

    async deleteTask(id: string, userId: string): Promise<void> {
        const task = await this.getTaskByTaskIdUserId(id, userId);
        await taskRepository.remove(task);
    }
    async getAllTasks(userId: string): Promise<TaskResponseDto[]> {
        const tasks = await taskRepository.find(
            { where: { userId } }
        );
        const tasksResponse = tasks.map((task) => {
            const taskResponse: TaskResponseDto = {
                id: task.id,
                title: task.title,
                description: task.description,
                priority: task.priority,
                deadline: task.deadline
            }
            return taskResponse;
        })
        return tasksResponse;
    }
}