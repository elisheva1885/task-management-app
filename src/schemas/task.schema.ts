import z from 'zod'
import { Priority } from '../constants/priority.js'

const dateSchema = z.string()
  .refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value), {
    message: "Invalid date format. Expected YYYY-MM-DD",
  })
  .transform((value) => {
    const [year, month, day] = value.split("-").map(Number);
    if(year==undefined || month==undefined || day==undefined){
       return "Invalid date format. Expected YYYY-MM-DD" ;
    }
    const date = new Date(Date.UTC(year, month - 1, day));
    return date.getTime();
  });

export const createTaskSchema = z.object({
    title: z.string(),
    description: z.string(),
    priority: z.enum(Priority),
    deadline: dateSchema,
})

export const updateTaskSchema = z.object({
    title: z.string(),
    description: z.string(),
    priority: z.enum(Priority),
    deadline: dateSchema
}).partial();

