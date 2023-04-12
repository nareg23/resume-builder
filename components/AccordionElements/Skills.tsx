import useSkillsStore from "@/store/useSkillsStore";
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { RiAddLine } from "react-icons/ri";

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
    <div className="py-2">
      <div className="w-full space-y-3">
        {skills?.map((skill) => (
          <div
            className="flex text-gray-700/70 space-x-2 justify-between items-center"
            key={skill.id}
          >
            <div className="flex items-center space-x-2">
              <p className="uppercase font-semibold text-xs">skill</p>
              <input
                className="text-gray-600 flex-1 w-full bg-gray-100 outline-none
                 border-gray-500 font-medium rounded-sm px-2 py-2 text-sm 2xl:text-base"
                type="text"
                name="name"
                value={skill.name}
                onChange={(e) => handleChange(e, skill.id)}
              />
            </div>

            <div className="flex items-center justify-around flex-1">
              <p className="uppercase hidden 2xl:inline-flex font-semibold text-xs">
                Level
              </p>
              <select
                onChange={(e) => handleChange(e, skill.id)}
                className="w-full 2xl:w-1/2 outline-none"
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
            <button
              className=" text-red-300 hover:text-red-600"
              onClick={() => removeSkill(skill.id)}
            >
              <IoMdCloseCircle className="w-5 h-5 2xl:h-6 2xl:w-6 text-red-300 hover:text-red-600" />
            </button>
          </div>
        ))}

        <div className="flex justify-center items-center w-full py-4">
          <button
            className="flex items-center gap-1 rounded-md 
            text-gray-300 font-medium hover:text-gray-500"
            onClick={addSkill}
          >
            <RiAddLine className="h-5 w-5" /> add skill
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
