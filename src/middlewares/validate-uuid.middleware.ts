import z from 'zod'
import type { NextFunction, Request, Response } from 'express'
import { HttpStatus } from '../constants/http-status'
export const validateUuid = () => (req: Request, res: Response, next: NextFunction) => {
	const id = req.params.id
	const result = z.uuid().safeParse(id)
	if (!result.success) {
		return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Invalid ID format' })
	}
	req.params.id = result.data;
	next()
}
