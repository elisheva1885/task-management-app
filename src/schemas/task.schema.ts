import z from 'zod'
import { Priority } from '../constants/priority.js'
import { isValid, parse } from 'date-fns';

const dateSchema = z.string().refine((value) => {
  const parsed = parse(value, "yyyy-MM-dd", new Date());
  return isValid(parsed);
}, {
  message: "Invalid date format. Expected YYYY-MM-DD",
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

