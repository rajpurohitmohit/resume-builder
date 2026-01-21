import "../types/express.js";
import Resume from "../model/resumeModel.js";
import { getImageKit } from "../configs/imageKit.js";
import fs from "fs";
// Creating a new resume
// POST: /api/resumes/create
export const createResume = async (req, res) => {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const { title } = req.body;
        // Create new resume
        const newResume = await Resume.create({ userId, title });
        // return success message with the created resume
        return res.status(201).json({
            message: "Resume Created Successfully",
            resume: newResume,
        });
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
// Deleting a resume
// DELETE: /api/resume/delete
export const deleteResume = async (req, res) => {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const { resumeId } = req.params;
        await Resume.findByIdAndDelete({ userId, _id: resumeId });
        return res.status(201).json({ message: "Resume Deleted Successfully" });
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
// Get User Resume by ID
// GET: /api/resume/get
export const getResumeById = async (req, res) => {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const { resumeId } = req.params;
        const resume = await Resume.findOne({ userId, _id: resumeId });
        if (!resume) {
            return res.status(404).json({ message: "Resume Not Found" });
        }
        const { __v, createdAt, updatedAt, ...resumeData } = resume.toObject();
        return res.status(200).json({ resume: resumeData });
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
// Get resume by ID public
// GET: /api/resumes/public
export const getPublicResumeById = async (req, res) => {
    try {
        const { resumeId } = req.params;
        const resume = await Resume.findOne({ public: true, _id: resumeId });
        if (!resume) {
            return res.status(404).json({ message: "Resume not found!" });
        }
        return res.status(200).json({ resume });
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
// Updating a resume
// PUT: /api/resumes/update
export const updateResume = async (req, res) => {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const { resumeId, resumeData, removeBackground } = req.body;
        const image = req.file;
        let resumeDataCopy;
        if (typeof resumeData === "string") {
            resumeDataCopy = await JSON.parse(resumeData);
        }
        else {
            resumeDataCopy = structuredClone(resumeData);
        }
        if (image) {
            try {
                console.log("Image received:", image.path, image.originalname);
                const imageBuffer = fs.readFileSync(image.path);
                const base64Image = imageBuffer.toString("base64");
                console.log("Base64 image length:", base64Image.length);
                const uploadResponse = await getImageKit().upload({
                    file: base64Image,
                    fileName: "resume-" + Date.now() + ".jpg",
                    folder: "user-resumes",
                });
                console.log("ImageKit upload response:", JSON.stringify(uploadResponse, null, 2));
                resumeDataCopy.personal_info = resumeDataCopy.personal_info || {};
                // If removeBackground is enabled, use ImageKit's face-focused URL transformation
                let imageUrl = uploadResponse.url;
                console.log("Original URL:", imageUrl);
                if (removeBackground === "yes") {
                    // Add face-focused cropping transformation: fo-face focuses on the face
                    imageUrl = imageUrl.replace("/user-resumes/", "/tr:fo-face,w-400,h-400/user-resumes/");
                    console.log("Transformed URL:", imageUrl);
                }
                resumeDataCopy.personal_info.image = imageUrl;
                // Clean up temp file
                fs.unlinkSync(image.path);
            }
            catch (uploadError) {
                console.error("Image upload error:", uploadError);
                // Clean up temp file on error
                if (fs.existsSync(image.path)) {
                    fs.unlinkSync(image.path);
                }
                return res
                    .status(500)
                    .json({ message: "Failed to upload image: " + uploadError.message });
            }
        }
        const resume = await Resume.findOneAndUpdate({ userId, _id: resumeId }, resumeDataCopy, { new: true });
        return res.status(200).json({ message: "Saved Successfully", resume });
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
//# sourceMappingURL=resumeController.js.map