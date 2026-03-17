const taskRepository = AppDataSource.getRepository(Task);


export class TaskService {
   
   
   
   
   
   
    async deleteTask(id: number) {
        const task = taskRepository.find({
            where:{id: id}
    });
        if(!task){
            throw new Error("task not found")
        }
        return task;
    }
}