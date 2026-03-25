import z from 'zod'
import { Priority } from '../constants/Priority'
export const createTaskSchema = z.object({
    title: z.string(),
    description : z.string(),
    priority : Priority,
    deadline : z.string().datetime()
})


