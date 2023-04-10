import React from "react";

type Props = {
  skills: Skill[];
};

const SkillsList = ({ skills }: Props) => {
  return (
    <div className="flex flex-col ">
      <h1 className="uppercase mb-2 text-lg text-gray-600">Skills</h1>
      <div className="space-y-1">
        {skills.map((skill) => (
          <p className="text-gray-500" key={skill.id}>
            {skill.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
