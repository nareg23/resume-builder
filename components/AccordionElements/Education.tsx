import useEducationStore from "@/store/useEducationStore";
import React from "react";

const Education = () => {
  const { addSchool, removeSchool, schools, setField } = useEducationStore(
    (state) => state
  );
  return (
    <div className=" p-5">
      {schools.map((school) => (
        <div key={school.id} className="space-y-8">
          <button onClick={() => removeSchool(school.id)}>x</button>
          <div className="flex flex-col">
            <label htmlFor="school">School</label>
            <input type="text" name="school" />
            <label htmlFor="description">description</label>
            <input type="text" name="description" />
          </div>

          <div className="flex">
            <label htmlFor="from">from</label>
            <input type="date" name="from" />
            <label htmlFor="to">to</label>
            <input type="date" name="to" />
          </div>
        </div>
      ))}

      <button onClick={() => addSchool()}>add</button>
    </div>
  );
};

export default Education;
