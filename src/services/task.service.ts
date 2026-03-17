import { AppDataSource } from "../app.js";

const taskRepository = AppDataSource.getRepository(Task);


export class TaskService {
    async updateTask( taskData : Partial<Task>,id: number) {
        const task = taskRepository.find({
            where: {id: id}
    });
        if(!task){
            throw new Error("task not found")
        }
        task.title = taskData.title;
        task.description = taskData.description;
        task.priority = taskData.priority;
        task.deadline = taskData.deadline;

        await taskRepository.save(task);
        return task;
    }
}
