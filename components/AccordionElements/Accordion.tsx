"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { IconType } from "react-icons";

interface Props {
  i: number;
  children: JSX.Element;
  title: string;
  expanded: boolean | number;
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>;
  Icon: IconType;
}

const Accordion = ({
  i,
  expanded,
  setExpanded,
  title,
  children,
  Icon,
}: Props) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        className="p-5 flex justify-between items-center cursor-pointer
          rounded-md border border-slate-100 
          hover:bg-gray-300 transition-colors duration-150 select-none"
        initial={false}
        animate={{
          backgroundColor: isOpen ? "#0F1020" : "#E6F6F6",
          color: isOpen ? "#fff" : "#0F1020",
        }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <div className="flex space-x-2 items-center">
          <Icon className={`h-5 w-5`} />
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            className=" text-black"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.9] }}
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
