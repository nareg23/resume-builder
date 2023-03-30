"use client";

import useWorkXpStore from "@/store/useWorkXpStore";
import React from "react";

type HandleChange = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  index: number
) => void;

const WorkExperience = () => {
  const { jobs, addJob, removeJob, setField } = useWorkXpStore(
    (state) => state
  );

  const handleChange: HandleChange = (event, index) => {
    const {
      currentTarget: { value, name },
    } = event;
    console.log("name", name);
    setField(name, value, index);
  };

  return (
    <div className="px-5">
      {jobs.map((job, i) => (
        <div className="relative pb-10 space-y-6" key={job.id}>
          <h1>Job # {i + 1}</h1>
          <button
            onClick={() => {
              removeJob(i);
            }}
            className="absolute right-1 top-1"
          >
            x
          </button>
          <div>
            <label htmlFor="from">from</label>
            <input
              className="text-black"
              type="date"
              name="from"
              value={job.from}
              onChange={(e) => handleChange(e, i)}
            />

            <label htmlFor="to">to</label>
            <input
              className="text-black"
              type="date"
              name="to"
              value={job.to}
              onChange={(e) => handleChange(e, i)}
            />
          </div>
          <div>
            <label htmlFor="title">title</label>
            <input
              className="text-black"
              type="text"
              name="title"
              value={job.title}
              onChange={(e) => handleChange(e, i)}
            />
          </div>
          <div>
            <label htmlFor="company">company</label>
            <input
              className="text-black"
              name="company"
              value={job.company}
              onChange={(e) => handleChange(e, i)}
            />
          </div>
          <div>
            <label htmlFor="title">description</label>
            <textarea
              className="text-black"
              name="description"
              value={job.description}
              onChange={(e) => handleChange(e, i)}
            />
          </div>
        </div>
      ))}
      <div>
        <button onClick={addJob}>add</button>
      </div>
    </div>
  );
};

export default WorkExperience;
