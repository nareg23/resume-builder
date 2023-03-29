"use client";

import useWorkXpStore from "@/store/useWorkXpStore";
import React from "react";

const WorkExperience = () => {
  const { jobs } = useWorkXpStore((state) => state);
  return (
    <div className="px-5">
      {jobs.map((job) => (
        <div key={job.company}>
          <div>
            <label htmlFor="">from</label>
            <input
              className="text-black"
              type="date"
              value={job.from}
              onChange={(e) => console.log(e.currentTarget.value)}
            />

            <label htmlFor="">to</label>
            <input className="text-black" type="date" value={job.to} />
          </div>
          <div>
            <label htmlFor="">title</label>
            <input className="text-black" type="text" value={job.title} />
          </div>
          <div>
            <label htmlFor="">Company</label>
            <input className="text-black" type="text" value={job.company} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
