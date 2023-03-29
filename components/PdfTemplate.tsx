"use client";

import useFormStore from "@/store/useFormStore";
import useWorkXpStore from "@/store/useWorkXpStore";
import React from "react";

const PdfTemplate = () => {
  const { name, lastName } = useFormStore((state) => state.form);
  const jobs = useWorkXpStore((state) => state.jobs);
  return (
    <div>
      <h1>{name}</h1>
      <h1
        className="text-4xl text-black
      "
      >
        {lastName}
      </h1>
      <div>
        {jobs?.map((job) => (
          <div key={job.id}>
            <h2 className="text-orange-200">{job.company}</h2>
            <h3>{job.title}</h3>
            <p>
              from {job.from} to {job.to}
            </p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfTemplate;
