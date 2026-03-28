import z from 'zod'
import { Priority } from '../constants/priority.js'
export const createTaskSchema = z.object({
	title: z.string(),
	description: z.string(),
	priority: z.enum(Priority),
	deadline: z.string().datetime(),
})
