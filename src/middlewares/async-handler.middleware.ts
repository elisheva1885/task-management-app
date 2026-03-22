import type { NextFunction , Request  , Response} from "express"
import type { AsyncFunction } from "../types/async-function.type";



export default (execution: AsyncFunction) =>
  (req: Request, res: Response, next: NextFunction) => {
    execution(req, res, next).catch(next);
  };