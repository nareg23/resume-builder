"use client";
import React, { useState } from "react";
import Accordion from "./Accordion";
import PersonalInfoForm from "./PersonalInfoForm";
import WorkExperience from "./WorkExperience";

const ControlPanel = () => {
  const [expanded, setExpanded] = useState<false | number>(0);
  return (
    <div className="bg-gray-800 h-full">
      <h1 className="text-white">
        <Accordion
          i={0}
          expanded={expanded}
          setExpanded={setExpanded}
          title="Personal info"
        >
          <PersonalInfoForm />
        </Accordion>
        <Accordion
          i={1}
          expanded={expanded}
          setExpanded={setExpanded}
          title="work experience"
        >
          <WorkExperience />
        </Accordion>
      </h1>
    </div>
  );
};

export default ControlPanel;
