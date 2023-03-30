import useSkillsStore from "@/store/useSkillsStore";
import React, { useState } from "react";

const Skills = () => {
  const [newSkill, setNewSkill] = useState("");
  const { addSkill, removeSkill, skills } = useSkillsStore((state) => state);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addSkill(newSkill);
    setNewSkill("");
  };
  return (
    <div className="">
      <div>
        <ul>
          {skills?.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="text-black"
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.currentTarget.value)}
        />
        <button>add</button>
      </form>
    </div>
  );
};

export default Skills;
