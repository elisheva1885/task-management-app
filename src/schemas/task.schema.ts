import z from 'zod'
export const updateTaskSchema = z.object({
    title : z.string(),
    description : z.string(),
    priority : z.string(),
    deadline : z.string().datetime()
}).partial();