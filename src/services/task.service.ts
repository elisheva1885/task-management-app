import { HttpStatus } from "../constants/http-status.js";
import { AppDataSource } from "../db/data-source.js";
import type { CreateTaskRequestDto } from "../dto/create-task.dto.js";
import { Task } from "../entities/Task.entity.js";
import { AppError } from "../errors/app-errors.js";

const taskRepository = AppDataSource.getRepository(Task);


export class TaskService {
    async getTaskByTaskIdUserId(id: string, userId: string): Promise<Task> {
        const task = await taskRepository.findOne({ where: { id, userId } });
        if (!task) {
            throw new AppError("Not Found", HttpStatus.BAD_REQUEST);
        }
        return task;
    };

    async deleteTask(id: string, userId: string): Promise<void> {
        const task = await this.getTaskByTaskIdUserId(id, userId);
        await taskRepository.remove(task);
    }
     async addTask(data:CreateTaskRequestDto, userId: string):Promise<Task> {
         const deadline = new Date(data.deadline);
         if(isNaN(deadline.getTime())){
            throw new AppError("invalid date",HttpStatus.BAD_REQUEST)
         }
        const task = taskRepository.create({...data, deadline, userId})
        await taskRepository.save(task);
        return task;
    }
    async getAllUserTasks(userId: string): Promise<Task[]> {
        const tasks = await taskRepository.find(
            { where: { userId } }
        );
        return tasks;
    }

    async getTask(id: string, userId: string): Promise<Task> {
        const task = await this.getTaskByTaskIdUserId(id, userId);
        return task;
    }

}