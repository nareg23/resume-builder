"use client";
import React, { useState } from "react";
import Accordion from "./AccordionElements/Accordion";
import PersonalInfoForm from "./AccordionElements/PersonalInfoForm";
import WorkExperience from "./AccordionElements/WorkExperience";
import Skills from "./AccordionElements/Skills";
import Education from "./AccordionElements/Education";
import CustomSelect from "./CustomSelect";
import { motion, AnimatePresence } from "framer-motion";
import TemplateAccordion from "./AccordionElements/TemplateAccordion";

const ControlPanel = () => {
  const [expanded, setExpanded] = useState<false | number>(0);
  return (
    <>
      <AnimatePresence initial={false}>
        <div className="h-full flex flex-col items-center px-10">
          <div className="relative w-full">
            {/* <CustomSelect /> */}
            <TemplateAccordion />
          </div>
          {/*     <div className="w-full">
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
          </div> */}
          {/*   <div>
            <button>Logout</button>
          </div> */}
        </div>
      </AnimatePresence>
    </>
  );
};

export default ControlPanel;
