import type { NextFunction, Request, Response } from "express";
import "../types/express.js";
declare const protect: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export default protect;
//# sourceMappingURL=authMiddleware.d.ts.map