"use client";
import React, { useState } from "react";
import Accordion from "./AccordionElements/Accordion";
import PersonalInfoForm from "./AccordionElements/PersonalInfoForm";
import WorkExperience from "./AccordionElements/WorkExperience";
import Skills from "./AccordionElements/Skills";
import Education from "./AccordionElements/Education";

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
      <Accordion
        i={3}
        expanded={expanded}
        setExpanded={setExpanded}
        title="Education/Training"
      >
        <Education />
      </Accordion>
    </div>
  );
};

export default ControlPanel;
