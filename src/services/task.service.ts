import { AppDataSource } from "../app.js";

const taskRepository = AppDataSource.getRepository(Task);


export class TaskService {
    async getAllTasks() {
        const tasks = taskRepository.find();
        if(!tasks){
            throw new Error("no tasks found")
        }
        return tasks;
    }
}