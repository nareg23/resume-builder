import useEducationStore from "@/store/useEducationStore";
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { RiAddLine } from "react-icons/ri";

type HandleChange = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  index: number
) => void;

const Education = () => {
  const { addSchool, removeSchool, schools, setField } = useEducationStore(
    (state) => state
  );

  const handleChange: HandleChange = (event, index) => {
    const {
      currentTarget: { value, name },
    } = event;
    setField(name, value, index);
  };

  return (
    <div className="flex flex-col space-y-6">
      {schools?.map((school, i) => (
        <div
          key={school.id}
          className="flex flex-col text-gray-700/70 space-y-3"
        >
          <div className="flex justify-between bg-indigo-400/20 px-2 py-2 rounded-md">
            <p className="font-bold text-gray-500"> # {i + 1}</p>
            <button onClick={() => removeSchool(school.id)}>
              <IoMdCloseCircle className="h-6 w-6 text-red-300 hover:text-red-600" />
            </button>
          </div>

          <div className="flex flex-col items-start ">
            <label className="uppercase font-semibold text-xs" htmlFor="school">
              School
            </label>
            <input
              className="text-gray-600 flex-1 w-full bg-gray-100 outline-none 
          border-gray-500 font-medium rounded-sm px-2 py-2 text-md"
              type="text"
              name="school"
              value={school.school}
              onChange={(e) => handleChange(e, school.id)}
            />
          </div>
          <div>
            <label
              className="uppercase font-semibold text-xs"
              htmlFor="description"
            >
              description
            </label>
            <input
              className="text-gray-600 flex-1 w-full bg-gray-100 outline-none 
            border-gray-500 font-medium rounded-sm px-2 py-2 text-md"
              type="text"
              name="description"
              onChange={(e) => handleChange(e, school.id)}
            />
          </div>

          <div className="flex gap-3">
            <div className="flex flex-col flex-1">
              <label className="uppercase font-semibold text-xs" htmlFor="from">
                from
              </label>
              <input
                className=" w-full bg-gray-100 outline-none  border
              border-gray-300/50 font-medium rounded-sm px-2 py-2 text-md"
                type="date"
                name="from"
                onChange={(e) => handleChange(e, school.id)}
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="uppercase font-semibold text-xs" htmlFor="to">
                to
              </label>
              <input
                className=" w-full bg-gray-100 outline-none  border
               border-gray-300/50 font-medium rounded-sm px-2 py-2 text-md"
                type="date"
                name="to"
                onChange={(e) => handleChange(e, school.id)}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center items-center w-full py-4">
        <button
          className="flex items-center gap-1 rounded-md
           text-gray-300 font-medium hover:text-gray-500"
          onClick={addSchool}
        >
          <RiAddLine className="h-5 w-5" /> add education
        </button>
      </div>
    </div>
  );
};

export default Education;
