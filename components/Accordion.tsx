"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PersonalInfoForm from "./PersonalInfoForm";

interface Props {
  i: number;
  children: JSX.Element;
  title: string;
  expanded: boolean | number;
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>;
}

const Accordion = ({ i, expanded, setExpanded, title, children }: Props) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        className="p-5 flex justify-center items-center cursor-pointer"
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            className="text-white"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {/* accordion contents */}
            {children}
            {/* end accordion contents */}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
