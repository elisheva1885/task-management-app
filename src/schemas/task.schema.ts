import z from 'zod'
export const createTaskSchema = z.object({
    title: z.string(),
    description : z.string(),
    priority : z.string(),
    deadline : z.string().datetime()
})


