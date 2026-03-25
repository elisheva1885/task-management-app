import { AppDataSource } from "../db/data-source";
import { Task } from "../entities/Task.entity";
import { AppError } from "../errors/app-errors";

const taskRepository = AppDataSource.getRepository(Task);

export class TaskService {
    getTaskByTaskIdUserId = async (id: string, userId: string): Promise<Task> => {
        const task = await taskRepository.findOne(
            { where: { id, userId } }
        );
        if (!task) {
            throw new AppError("task not found", 404)
        }
        return task;
    }

    async deleteTask(id: string, userId: string) {
        const task = await this.getTaskByTaskIdUserId(id, userId);
        await taskRepository.remove(task);
        return task;

    }
}