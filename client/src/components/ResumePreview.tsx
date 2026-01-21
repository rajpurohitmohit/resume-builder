import ClassicTemplate from "./templates/ClassicTemplate.tsx"
import MinimalImageTemplate from "./templates/MinimalImageTemplate.tsx"
import MinimalTemplate from "./templates/MinimalTemplate.tsx"
import ModernTemplate from "./templates/ModernTemplate.tsx"

interface ResumePreviewProps {
    data: Record<string, any>;
    template: string;
    accentColor: string;
    classes?: string;
}

const ResumePreview = ({data, template, accentColor, classes = ""}: ResumePreviewProps) => {

    const renderTemplate = () => {
        switch (template) {
            case "modern":
                return <ModernTemplate data={data} accentColor={accentColor} />;
            case "minimal":
                return <MinimalTemplate data={data} accentColor={accentColor} />;
            case "minimal-image":
                return <MinimalImageTemplate data={data} accentColor={accentColor} />;
            case "classic":
            default:
                return <ClassicTemplate data={data} accentColor={accentColor} />;
        }
    };

  return (
    <div>
      <div className='w-full bg-gray-100'>
        <div id='resume-preview' className={"border border-gray-200 print:shadow-none print:border-none " + classes}>
          {renderTemplate()}
        </div>
      </div>
      <style tsx>
        {`
        @page{
            size: letter;
            margin: 0;
        }
        @media print{
            html, body{
                width: 8.5in;
                height: 11in;
                overflow: hidden;
            }
            body * {
                visibility: hidden;
            }
            #resume-preview, #resume-preview * {
                visibility: visible;
            }
            #resume-preview{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: auto;
                margin: 0;
                padding: 0;
                box-shadow: none !important;
                border: none !important;
            }
        }
        `}

      </style>
    </div>
  )
}

export default ResumePreview
