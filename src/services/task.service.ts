import { AppDataSource } from "../db/data-source.js";
import type { TaskResponseDto } from "../dto/task.tdo.js";
import { Task } from "../entities/Task.entity.js";

const taskRepository = AppDataSource.getRepository(Task);

export class TaskService {
    async getAllTasks(userId: string): Promise<TaskResponseDto[]> {
        const tasks = await taskRepository.find(
            { where: { userId } }
        );
       const tasksResponse =  tasks.map((task)=> {
        const taskResponse : TaskResponseDto = {
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