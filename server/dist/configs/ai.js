import { OpenAI } from "openai";
let ai = null;
export const getAI = () => {
    if (!ai) {
        const apiKey = process.env.GEMINI_API_KEY;
        const baseURL = process.env.GEMINI_BASE_URL;
        if (!apiKey || !baseURL) {
            throw new Error("GEMINI_API_KEY or GEMINI_BASE_URL is not defined in environment variables");
        }
        ai = new OpenAI({
            apiKey,
            baseURL,
        });
    }
    return ai;
};
export default { getAI };
//# sourceMappingURL=ai.js.map