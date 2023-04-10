import React from "react";

type Props = {
  schools: Education[];
};

const EducationList = ({ schools }: Props) => {
  return (
    <div>
      <h5 className="text-lg text-gray-600 font-semibold mb-2">Education</h5>
      <div className="space-y-5">
        {schools?.map((school) => (
          <div className="" key={school.id}>
            <div className="flex space-x-2">
              <p className="font-medium text-gray-700">{school.school}</p>
            </div>
            <div className="flex space-x-2 items-center text-sm text-gray-400">
              <p>{school.from}</p>
              <span>-</span>
              {school.to ? <p>{school.to}</p> : <p>present</p>}
            </div>
            <p className="text-gray-800 text-">{school.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationList;
