"use client";

import useWorkXpStore from "@/store/useWorkXpStore";
import React from "react";
import Editor from "../WorkEditor";
import { IoMdCloseCircle } from "react-icons/io";
import { RiAddLine } from "react-icons/ri";

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
    setField(name, value, index);
  };

  return (
    <div className="text-gray-700/70 flex w-full flex-col items-end">
      {jobs.map((job, i) => (
        <div className="relative pb-10 space-y-6" key={job.id}>
          <div
            className="flex justify-between bg-indigo-400/20 px-2 py-2 rounded-md
          "
          >
            <p className="font-bold text-gray-500"> # {i + 1}</p>
            <button
              onClick={() => {
                removeJob(i);
              }}
            >
              <IoMdCloseCircle className="h-6 w-6 text-red-300 hover:text-red-600" />
            </button>
          </div>

          <div className="flex  items-center justify-between space-x-2">
            <div className="flex flex-col w-full flex-1 space-y-2">
              <label className="uppercase font-semibold text-xs" htmlFor="from">
                from
              </label>
              <input
                className=" w-full bg-gray-100 outline-none  border
                  border-gray-300/50 font-medium rounded-sm px-2 py-2 text-md"
                type="date"
                name="from"
                value={job.from}
                onChange={(e) => handleChange(e, job.id)}
              />
            </div>

            <div className="w-full flex flex-col  flex-1 space-y-2">
              <label className="uppercase font-semibold text-xs" htmlFor="to">
                to
              </label>
              <input
                className="w-full bg-gray-100 outline-none  border
                        border-gray-300/50 font-medium rounded-sm px-2 py-2 text-md"
                type="date"
                name="to"
                value={job.to}
                onChange={(e) => handleChange(e, job.id)}
              />
            </div>
          </div>

          <div className="flex space-x-2">
            <div className="flex-1 space-y-2">
              <label
                className="uppercase font-semibold text-xs"
                htmlFor="title"
              >
                title
              </label>
              <input
                className="w-full bg-gray-100 outline-none  border
                 border-gray-300/50 font-medium rounded-sm px-2 py-2 text-md"
                type="text"
                name="title"
                value={job.title}
                onChange={(e) => handleChange(e, job.id)}
              />
            </div>
            <div className="flex-1 space-y-2">
              <label
                className="uppercase font-semibold text-xs"
                htmlFor="company"
              >
                company
              </label>
              <input
                className="w-full bg-gray-100 outline-none border
                border-gray-300/50 font-medium rounded-sm px-2 py-2 text-md"
                name="company"
                value={job.company}
                onChange={(e) => handleChange(e, job.id)}
              />
            </div>
          </div>

          <div className="text-2xl space-y-2">
            <label className="uppercase font-semibold text-xs" htmlFor="title">
              description
            </label>
            <Editor jobId={job.id} />
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center w-full py-4">
        <button
          className=" flex items-center gap-1 rounded-md
           text-gray-300 font-medium hover:text-gray-500"
          onClick={addJob}
        >
          <RiAddLine className="h-5 w-5" /> add job
        </button>
      </div>
    </div>
  );
};

export default WorkExperience;
