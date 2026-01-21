import type { Request, Response } from "express";
import "../types/express.js";
export declare const createResume: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteResume: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getResumeById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getPublicResumeById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateResume: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=resumeController.d.ts.map