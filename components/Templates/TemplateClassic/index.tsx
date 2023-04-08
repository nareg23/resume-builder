import React from "react";
import Jobs from "./Jobs";
import Personal from "./Personal";
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
      className="w-[1056px] bg-white rounded-md mx-auto select-none"
    >
      <div>
        <Personal personalForm={personalForm} />
      </div>
      <div>
        <Jobs jobs={jobs} />
      </div>
      <div>
        <SkillsList skills={skills} />
      </div>
      <div>
        <EducationsList schools={schools} />
      </div>
    </div>
  );
};

export default TemplateClassic;
