
const taskRepository = AppDataSource.getRepository(Task);

export class TaskService {


    async addTask(data : Partial<Task>){
        if(!data.title || !data.description || !data.priority || !data.deadline){
            throw new Error("all details required");
        }
        const task = taskRepository.create(data)
        await taskRepository.save(task);
       return task;
    }

   
}