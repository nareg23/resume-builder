import React from "react";
import Jobs from "./Jobs";
import Contact from "./Contact";
import useTemplateData from "@/hooks/useTemplateData";
import SkillsList from "./SkillsList";
import EducationsList from "./EducationsList";

type Props = {
  pdfRef: React.MutableRefObject<null>;
};

const TemplateClassic = ({ pdfRef }: Props) => {
  const { jobs, personalForm, schools, skills } = useTemplateData();
  return (
    <div
      ref={pdfRef}
      className="w-[796px] p-5 flex flex-col items-center 
      justify-center bg-white rounded-md mx-auto select-none
      space-y-12"
    >
      <div className="w-full flex flex-col items-center">
        <h1 className="text-4xl font-medium">
          {personalForm.name} {personalForm.lastName}
        </h1>
        <h5 className="text-2xl text-gray-500">{personalForm.title}</h5>
      </div>

      <div className="grid grid-cols-3 gap-12 w-full">
        {/* left */}
        <div className="col-span-1 space-y-2">
          <Contact email={personalForm.email} phone={personalForm.phoneNum} />
          <SkillsList skills={skills} />
        </div>
        {/* right */}
        <div className="col-span-2 space-y-5">
          <div className="space-y-2">
            <h5 className="text-lg text-gray-600 font-semibold mb-2">
              Summary
            </h5>
            <div
              className="col-span-2 max-w-[650px] text-gray-700"
              dangerouslySetInnerHTML={{ __html: personalForm.summary }}
            ></div>
          </div>

          <div className="space-y-12">
            <Jobs jobs={jobs} />
            <EducationsList schools={schools} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateClassic;
