import { AppDataSource } from "../db/data-source";
import type { UpdataTaskRequestDto } from "../dto/task.dto";
import type { TaskResponseDto } from "../dto/task.tdo";
import { Task } from "../entities/Task.entity";
import { AppError } from "../errors/app-errors";


const taskRepository = AppDataSource.getRepository(Task);
const getTaskById = async (id: string) => {
    const task = await taskRepository.findOne({
        where: { id }
    })
    if (!task) {
        throw new AppError("task not found", 404)
    }
    return task;
}


export class TaskService {
    async updateTask(taskData: UpdataTaskRequestDto, id: string, userId: string) {
        const task = await getTaskById(id);
        if (task.userId !== userId) {
            throw new AppError("you have no access to update this task", 403)
        }
        if (taskData.title !== undefined) {
            task.title = taskData.title;
        }
        task.title = taskData.title !== undefined ? taskData.title : task.title;
        task.description = taskData.description !== undefined ? taskData.description : task.description;
        task.priority = taskData.priority !== undefined ? taskData.priority : task.priority;
        if (taskData.deadline !== undefined) {
            const date = new Date(taskData.deadline);
            if (isNaN(date.getTime())) {
                throw new AppError("Invalid date format for deadline", 400);
            }
            task.deadline = date;
        }
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
