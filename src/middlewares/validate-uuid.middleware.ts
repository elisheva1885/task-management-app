import z from "zod";
import type{ NextFunction, Request , Response } from "express";
export const validateUuid = () => (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = z.string().uuid().safeParse(id);
    if (!result.success) {
        return res.status(400).json({ message: "Invalid ID format" });
    }
    next();
}