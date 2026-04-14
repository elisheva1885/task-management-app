import z from 'zod'
export const registerSchema = z.object({
	username: z.string().min(3).max(50).trim(),
	password: z.string().min(8, "Password must be at least 8 characters"),
})

export const loginSchema = z.object({
	username: z.string(),
	password: z.string(),
})
