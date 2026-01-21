import { Plus, Trash2 } from "lucide-react";

interface ProjectFormProps {
  data: any;
  onChange: any;
}

const ProjectForm = ({ data, onChange }: ProjectFormProps) => {
  const addProject = () => {
    const newProject = {
      name: "",
      type: "",
      description: "",
    };

    onChange([...data, newProject]);
  };

  const removeProject = (index: any) => {
    const updated = data.filter((_: any, i: any) => i !== index);
    onChange(updated);
  };

  const updateProject = (index: any, field: any, value: any) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex iterms-center gap-2 text-lg font-semibold text-gray-900">
            Project
          </h3>
          <p className="text-sm text-gray-500">Add your project</p>
        </div>
        <button
          className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
          onClick={addProject}
        >
          <Plus className="size-4" />
          Add Project
        </button>
      </div>

      <div className="space-y-4 mt-6">
        {data.map((project: any, index: any) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg space-y-3"
          >
            <div className="flex justify-between items-start">
              <h4>Project #{index + 1}</h4>
              <button
                className="text-red-500 hover:text-red-700 transition-colors"
                onClick={() => removeProject(index)}
              >
                <Trash2 className="size-4" />
              </button>
            </div>

            <div className="grid gap-3">
              <input
                type="text"
                placeholder="Project Name"
                className="px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={project.name}
                onChange={(e) => updateProject(index, "name", e.target.value)}
              />
              <input
                type="text"
                placeholder="Project Type"
                className="px-3 py-2 text-sm border border-gray-300 focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none rounded-lg"
                value={project.type}
                onChange={(e) => updateProject(index, "type", e.target.value)}
              />
              <textarea
                rows={4}
                placeholder="Describe your project"
                className="w-full px-3 py-2 text-sm border border-gray-300 focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none rounded-lg resize-none"
                value={project.description}
                onChange={(e) => updateProject(index, "field", e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectForm;