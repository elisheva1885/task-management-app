import type z from 'zod'
import type { NextFunction, Request, Response } from 'express'
import { HttpStatus } from '../constants/http-status'
export const validate = (schema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
	const result = schema.safeParse(req.body)
	if (!result.success) {
		return res.status(HttpStatus.BAD_REQUEST).json({ errors: result.error.format() })
	}
	req.body = result.data
	next()
}
