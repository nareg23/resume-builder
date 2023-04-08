import React from "react";

type Props = {
  jobs: Job[];
};

const Jobs = ({ jobs }: Props) => {
  return (
    <div>
      {jobs?.map((job) => (
        <div key={job.id}>
          <p>{job.title}</p>
          <p>{job.company}</p>
          <p dangerouslySetInnerHTML={{ __html: job.description }}></p>
          <p>{job.from}</p>
          <p>{job.to}</p>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
