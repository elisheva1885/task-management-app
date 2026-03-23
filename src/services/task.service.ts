import { AppDataSource } from "../db/data-source";
import { Task } from "../entities/Task.entity";
import { AppError } from "../errors/app-errors";


const taskRepository = AppDataSource.getRepository(Task);


export class TaskService {
    async updateTask( taskData : Partial<Task>,id: string, userId: string) {

        const task = await taskRepository.findOne({
           where: {id, userId}
    });
        if(typeof(task) == undefined){
            throw new AppError("task not found", 404)
        }
        task.title = taskData.title;
        task?.description = taskData.description;
        task?.priority = taskData.priority;
        task?.deadline = taskData.deadline;

        await taskRepository.save(task);
        return task;
    }
}
