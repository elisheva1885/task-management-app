import { AppDataSource } from "../db/data-source";
import type { CreateTaskRequestDto } from "../dto/create-task.dto";
import type { UpdataTaskRequestDto } from "../dto/task.dto";
import { HttpStatus } from "../constants/http-status.js";
import { Task } from "../entities/Task.entity.js";
import { AppError } from "../errors/app-errors.js";
import type { TaskResponseDto } from "../dto/task.tdo.js";

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

    async addTask(data:CreateTaskRequestDto, userId: string):Promise<Task> {
         const deadline = new Date(data.deadline);
         if(isNaN(deadline.getTime())){
            throw new AppError("invalid date",HttpStatus.BAD_REQUEST)
         }
        const task = taskRepository.create({...data, deadline, userId})
        await taskRepository.save(task);
        return task;
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
