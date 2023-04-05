"use client";
import React, { useState } from "react";
import Accordion from "./AccordionElements/Accordion";
import PersonalInfoForm from "./AccordionElements/PersonalInfoForm";
import WorkExperience from "./AccordionElements/WorkExperience";
import Skills from "./AccordionElements/Skills";
import Education from "./AccordionElements/Education";
import { AnimatePresence } from "framer-motion";
import { BsPersonFill } from "react-icons/bs";
import {
  MdOutlineWork,
  MdSchool,
  MdAccountTree,
  MdOutlineLogout,
} from "react-icons/md";

const ControlPanel = () => {
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <>
      <AnimatePresence initial={false}>
        <div className="h-full relative flex flex-col justify-between items-center px-10 ">
          <div className="w-full scrollbar-thin scrollbar-none overflow-y-auto space-y-2">
            <Accordion
              Icon={BsPersonFill}
              i={0}
              expanded={expanded}
              setExpanded={setExpanded}
              title="Personal info"
            >
              <PersonalInfoForm />
            </Accordion>
            <Accordion
              Icon={MdOutlineWork}
              i={1}
              expanded={expanded}
              setExpanded={setExpanded}
              title="Work experience"
            >
              <WorkExperience />
            </Accordion>
            <Accordion
              Icon={MdAccountTree}
              i={2}
              expanded={expanded}
              setExpanded={setExpanded}
              title="Skills"
            >
              <Skills />
            </Accordion>
            <Accordion
              Icon={MdSchool}
              i={3}
              expanded={expanded}
              setExpanded={setExpanded}
              title="Education/Training"
            >
              <Education />
            </Accordion>
          </div>
          <div className="w-full py-6  text-red-500">
            <button className="flex items-center gap-1 hover:text-red-700 transition-colors duration-150">
              <MdOutlineLogout className="h-5 w-5 " /> Logout
            </button>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default ControlPanel;
