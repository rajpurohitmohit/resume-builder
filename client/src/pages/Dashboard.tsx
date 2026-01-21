import {
  FilePenLineIcon,
  LoaderCircleIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UploadCloud,
  UploadCloudIcon,
  XIcon,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { dummyResumeData } from "@/assets/assets";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "@/configs/api";
import toast from "react-hot-toast";
import type { RootState } from "@/app/store";
import pdfToText from "react-pdftotext";

type ResumeData = typeof dummyResumeData;

const Dashboard = () => {
  const { user, token } = useSelector((state: RootState) => state.auth);

  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];
  const [allResumes, setAllResumes] = useState<ResumeData>([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [editResumeId, setEditResumeId] = useState<string | false>(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const loadAllResumes = async () => {
    try {
      const { data } = await api.get("/api/users/resumes", {
        headers: { Authorization: token },
      });
      setAllResumes(data.resumes || []);
    } catch (error) {
      const err = error as {
        response?: { data?: { message?: string } };
        message?: string;
      };
      toast.error(
        err?.response?.data?.message || err?.message || "Something went wrong",
      );
    }
  };

  const createResume = async (e: FormEvent) => {
    try {
      e.preventDefault();
      const { data } = await api.post(
        "/api/resumes/create",
        { title },
        { headers: { Authorization: token } },
      );
      setAllResumes([...allResumes, data.resume]);
      setTitle("");
      setShowCreateResume(false);
      navigate(`/app/builder/${data.resume._id}`);
    } catch (error: unknown) {
      const err = error as {
        response?: { data?: { message?: string } };
        message?: string;
      };
      toast.error(
        err?.response?.data?.message || err?.message || "Something went wrong",
      );
    }
  };

  const uploadResume = async (e: FormEvent) => {
    e.preventDefault();
    if (!resume) {
      toast.error("Please select a PDF file");
      return;
    }
    setIsLoading(true);
    try {
      const resumeText = await pdfToText(resume);
      const { data } = await api.post(
        "/api/ai/upload-resume",
        { title, resumeText },
        { headers: { Authorization: token } },
      );
      setTitle("");
      setResume(null);
      setShowUploadResume(false);
      navigate(`/app/builder/${data.resumeId}`);
    } catch (error: unknown) {
      const err = error as {
        response?: { data?: { message?: string } };
        message?: string;
      };
      toast.error(
        err?.response?.data?.message || err?.message || "Something went wrong",
      );
    }
  };

  const editTitle = async (e: FormEvent) => {
    try {
      e.preventDefault();
      const { data } = await api.put(
        `/api/resumes/update`,
        { resumeId: editResumeId, resumeData: { title } },
        {
          headers: { Authorization: token },
        },
      );
      setAllResumes(
        allResumes.map((resume) =>
          resume._id === editResumeId ? { ...resume, title } : resume,
        ),
      );
      setTitle("");
      setEditResumeId("");
      toast.success(data.message);
    } catch (error) {
      const err = error as {
        response?: { data?: { message?: string } };
        message?: string;
      };
      toast.error(
        err?.response?.data?.message || err?.message || "Something went wrong",
      );
    }
  };

  const deleteResume = async (resumeId: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this resume?",
    );

    if (!confirm) return;

    try {
      const { data } = await api.delete(`/api/resumes/delete/${resumeId}`, {
        headers: { Authorization: token },
      });
      setAllResumes(allResumes.filter((resume) => resume._id !== resumeId));
      toast.success(data.message);
    } catch (error) {
      const err = error as {
        response?: { data?: { message?: string } };
        message?: string;
      };
      toast.error(
        err?.response?.data?.message || err?.message || "Something went wrong",
      );
    }
  };

  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-2xl font-meduim mb-6 bg-linear-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">
          Welcome, {user?.name || "User"}
        </p>

        <div className="flex gap-4 ">
          <button
            className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover: hover: shadow-1g transition-all duration-300 cursor-pointer"
            onClick={() => setShowCreateResume(true)}
          >
            <PlusIcon className="size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-green-300 to-green-500 text-white rounded-full" />
            <p className="text-sm group-hover:text-green-600 transition-all duration-300">
              Create Resume
            </p>
          </button>

          <button
            onClick={() => setShowUploadResume(true)}
            className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover: hover: shadow-1g transition-all duration-300 cursor-pointer"
          >
            <UploadCloudIcon className="size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-purple-300 to-purple-500 text-white rounded-full" />
            <p className="text-sm group-hover:text-purple-600 transition-all duration-300">
              Upload Existing
            </p>
          </button>
        </div>

        <hr className="border-slate-300 my-6 sm:w-76.25" />

        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length];
            return (
              <button
                onClick={() => navigate(`/app/builder/${resume._id}`)}
                key={index}
                className="relative w-full sm:max-w-36 h-48 flex flex-col items-center jutify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                  borderColor: baseColor + "40",
                }}
              >
                <FilePenLineIcon className="size-7 group-hover:scale-105 transition-all mt-10" />
                <p
                  className="text-sm group-hover:scale-105 transition-all px-2 text-center"
                  style={{ color: baseColor }}
                >
                  {resume.title}
                </p>
                <p
                  className="absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center"
                  style={{ color: baseColor + "90" }}
                >
                  Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                </p>

                <div
                  className="absolute top-1 right-1 group-hover:flex items-center hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <TrashIcon
                    className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                    onClick={() => deleteResume(resume._id)}
                  />
                  <PencilIcon
                    className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                    onClick={() => {
                      setEditResumeId(resume._id);
                      setTitle(resume.title);
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {showCreateResume && (
          <form
            className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
            onSubmit={createResume}
            onClick={() => setShowCreateResume(false)}
          >
            <div
              className="bg-white p-6 rounded-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4">Create a Resume</h2>
              <input
                type="text"
                placeholder="Enter resume title"
                className="w-full px-4 py-2 mb-4 border rounded focus:border-green-600 focus:ring-green-600 focus:outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                Create Resume
              </button>
              <button
                type="button"
                className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded"
                onClick={() => {
                  setShowCreateResume(false);
                  setTitle("");
                }}
              >
                <XIcon className="size-5" />
              </button>
            </div>
          </form>
        )}

        {showUploadResume && (
          <form
            className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
            onSubmit={uploadResume}
            onClick={() => setShowUploadResume(false)}
          >
            <div
              className="bg-white p-6 rounded-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4">Upload Resume</h2>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter resume title"
                className="w-full px-4 py-2 mb-4 border rounded focus:border-green-600 focus:ring-green-600 focus:outline-none"
                value={title}
                required
              />

              <div>
                <label
                  htmlFor="resume-input"
                  className="block text-sm text-slate-700"
                >
                  Select Resume file
                  <div className="flex flex-col items-center justify-center gap-2 border group text-slate-400 p-4 py-10 my-4 hover:border-green-500 hover:text-green-700 cursor-pointer transition-colors">
                    {resume ? (
                      <p className="text-green-700">{resume.name}</p>
                    ) : (
                      <>
                        <UploadCloud className="size-14 stroke-1" />
                        <p>Upload Resume</p>
                      </>
                    )}
                  </div>
                </label>
                <input
                  type="file"
                  id="resume-input"
                  accept=".pdf"
                  hidden
                  onChange={(e) =>
                    e.target.files && setResume(e.target.files[0])
                  }
                />
              </div>
              <button
                disabled={isLoading}
                type="submit"
                className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                {isLoading && (
                  <LoaderCircleIcon className="animate-spin size-4 text-white" />
                )}
                {isLoading ? "Uploading..." : "Upload Resume"}
              </button>
              <button
                type="button"
                className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded"
                onClick={() => {
                  setShowUploadResume(false);
                  setTitle("");
                }}
              >
                <XIcon className="size-5" />
              </button>
            </div>
          </form>
        )}

        {editResumeId && (
          <form
            className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
            onSubmit={editTitle}
            onClick={() => setEditResumeId(false)}
          >
            <div
              className="bg-white p-6 rounded-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4">Edit Resume Title</h2>
              <input
                type="text"
                placeholder="Enter resume title"
                className="w-full px-4 py-2 mb-4 border rounded focus:border-green-600 focus:ring-green-600 focus:outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                Update
              </button>
              <button
                type="button"
                className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded"
                onClick={() => {
                  setEditResumeId(false);
                  setTitle("");
                }}
              >
                <XIcon className="size-5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
