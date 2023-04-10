import React from "react";

type Props = {
  jobs: Job[];
};

const Jobs = ({ jobs }: Props) => {
  return (
    <div>
      <h5 className="text-lg text-gray-600 font-semibold mb-2">Experience</h5>
      <div className="space-y-5">
        {jobs?.map((job) => (
          <div className="" key={job.id}>
            <div className="flex space-x-2">
              <p className="font-medium text-gray-700">{job.company}</p>
              <span>-</span>
              <p className="text-gray-700">{job.title}</p>
            </div>
            <div className="flex space-x-2 items-center text-sm text-gray-400">
              <p>{job.from}</p>
              <span>-</span>
              {job.to ? <p>{job.to}</p> : <p>present</p>}
            </div>
            <p dangerouslySetInnerHTML={{ __html: job.description }}></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
