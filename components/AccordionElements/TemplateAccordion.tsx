"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowUpSLine } from "react-icons/ri";
import useTemplateStore, { TemplateComponents } from "@/store/useTemplateStore";

const covertTolowerCase = (title: string) => {
  const titleArray = title.toLowerCase().split("");
  titleArray[0] = titleArray[0].toUpperCase();
  return titleArray.join("");
};

const TemplateAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [setTemplate, currentComponentName] = useTemplateStore((state) => [
    state.setComponent,
    state.currentComponentName,
  ]);

  const handleClick = (keyName: any) => {
    setTemplate(keyName as any);
    setIsOpen(false);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const closeOnclickEvent = (e: MouseEvent) => {
      // @ts-expect-error
      if (!e?.target?.className?.includes("template__dropdown")) {
        setIsOpen(false);
      }
    };
    document?.addEventListener("click", closeOnclickEvent);

    return () => {
      document?.removeEventListener("click", closeOnclickEvent);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div
        className={`template__dropdown flex justify-between px-4 py-3 items-center rounded-md text-dark
        cursor-pointer select-none bg-primary  transition-colors duration-200 ${
          isOpen && "rounded-bl-none rounded-br-none"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className=" template__dropdown text-lg font-medium">
          {covertTolowerCase(currentComponentName)}
        </h2>
        {
          <motion.div
            className="template__dropdown"
            animate={{ rotateZ: isOpen ? 0 : 180 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <RiArrowUpSLine className="h-5 w-5" />
          </motion.div>
        }
      </div>

      {isOpen && (
        <motion.section
          className="template__dropdown text-white relative w-full z-20"
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto", y: 0 },
            collapsed: {
              opacity: 0,
              height: 0,
              y: -10,
              transition: { duration: 0.3, ease: [1, 0.63, 0.45, 0.12] },
            },
          }}
          transition={{ duration: 0.3, ease: [0.12, 0.45, 0.63, 1] }}
        >
          {/* accordion contents */}
          <AnimatePresence>
            <motion.div
              key={"modal"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="template__dropdown w-full absolute bg-gray-700 select-none  
           border-slate-100 rounded-bl-md rounded-br-md text-white"
            >
              {isOpen && (
                <div className="template__dropdown flex flex-col items-center">
                  {Object.keys(TemplateComponents).map(
                    (keyName) =>
                      currentComponentName != keyName && (
                        <button
                          key={keyName}
                          className="template__dropdown px-4 py-3 w-full text-left
                          font-medium 
                        hover:bg-dark hover:text-white transition-colors  duration-200 ease-out"
                          onClick={() => handleClick(keyName)}
                        >
                          {covertTolowerCase(keyName)}
                        </button>
                      )
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          {/* end accordion contents */}
        </motion.section>
      )}
    </div>
  );
};

export default TemplateAccordion;
