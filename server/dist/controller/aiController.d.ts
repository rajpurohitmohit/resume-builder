import type { Request, Response } from "express";
import "../types/express.js";
export declare const enhanceProfessionalSummary: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const enhanceJobDescription: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const uploadResume: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=aiController.d.ts.map