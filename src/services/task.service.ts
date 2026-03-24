import { AppDataSource } from "../db/data-source";
import { Task } from "../entities/Task.entity";
import { AppError } from "../errors/app-errors";

const taskRepository = AppDataSource.getRepository(Task);


export class TaskService {
    async deleteTask(id: string, userId: string) {
        const task = taskRepository.findOne({
            where:{id}
    });
        if(!task){
            throw new AppError("task not found",404)
        }
        return task;
    }
}