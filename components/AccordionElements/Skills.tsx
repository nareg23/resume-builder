import useSkillsStore from "@/store/useSkillsStore";
import React, { useState } from "react";

const Skills = () => {
  const { addSkill, removeSkill, skills, setField } = useSkillsStore(
    (state) => state
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    id: number
  ) => {
    const {
      currentTarget: { value, name },
    } = e;

    setField(name, value, id);
  };

  return (
    <div className="p-5">
      <div>
        {skills?.map((skill) => (
          <div className="border space-y-5" key={skill.id}>
            <div>
              <p>{skill.name}</p>
              <p>{skill.level}</p>
              <button onClick={() => removeSkill(skill.id)}>x</button>
            </div>
            <input
              className="text-black"
              type="text"
              name="name"
              value={skill.name}
              onChange={(e) => handleChange(e, skill.id)}
            />
            <select
              onChange={(e) => handleChange(e, skill.id)}
              className="text-black"
              name="level"
            >
              <option selected value="5">
                5
              </option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </div>
        ))}

        <button onClick={() => addSkill()}>add</button>
      </div>
    </div>
  );
};

export default Skills;
