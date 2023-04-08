import React from "react";
import Jobs from "./Jobs";
import Personal from "./Personal";
import useTemplateData from "@/hooks/useTemplateData";
import SkillsList from "./SkillsList";
import EducationsList from "./EducationsList";

const TemplateClassic = () => {
  const { jobs, personalForm, schools, skills } = useTemplateData();
  return (
    <div>
      <h1>this is a template</h1>
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
