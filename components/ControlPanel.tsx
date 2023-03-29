"use client";
import React, { useState } from "react";
import Accordion from "./Accordion";
import PersonalInfoForm from "./PersonalInfoForm";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";

const ControlPanel = () => {
  const [expanded, setExpanded] = useState<false | number>(0);
  return (
    <div className="h-full">
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
        title="Work experience"
      >
        <WorkExperience />
      </Accordion>
      <Accordion
        i={2}
        expanded={expanded}
        setExpanded={setExpanded}
        title="Skills"
      >
        <Skills />
      </Accordion>
    </div>
  );
};

export default ControlPanel;
