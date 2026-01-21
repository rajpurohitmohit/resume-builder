import ResumePreview from "@/components/ResumePreview";
import api from "@/configs/api";
import { ArrowLeftIcon, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Preview = () => {
  const { resumeId } = useParams();
  const [resumeData, setResumeData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadResume = async () => {
    try {
      const { data } = await api.get(`/api/resumes/public/` + resumeId);
      setResumeData(data.resume)
    } catch (error: any) {
      console.log(error.message)
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    loadResume();
  }, [resumeId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="size-8 animate-spin text-slate-400" />
      </div>
    );
  }

  return resumeData ? (
    <div className="bg-slate-100">
      <div className="max-w-3xl mx-auto py-10">
        <ResumePreview
          data={resumeData}
          template={resumeData.template}
          accentColor={resumeData.accent_color}
          classes="py-4 bg-white"
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-center text-6xl text-slate-400 font-medium">
        Resume not found
      </p>
      <a
        href="/"
        className="mt-6 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 h-9 m-1 ring-offset-1 ring-1 ring-green-400 flex items-center transition-colors"
      >
        <ArrowLeftIcon className="mr-2 size-4" />
        go to home page
      </a>
    </div>
  );
};

export default Preview;
