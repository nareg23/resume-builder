import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const mockData = ["Fantastic", "Awesome", "technical"];

const TemplateAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const expandedBorderClasses =
    "rounded-tl-md rounded-tr-md border border-slate-100 border-b-0";

  return (
    <>
      <h2 className="text-3xl text-gray-700 font-medium mb-3">Template</h2>
      <motion.div
        className={`flex justify-between px-4 py-3 items-center
        cursor-pointer select-none border-slate-100  ${
          expanded ? expandedBorderClasses : "rounded-md border"
        }`}
        initial={false}
        animate={{
          backgroundColor: expanded ? "rgb(229 231 235)" : "rgb(243 244 246 )",
        }}
        whileHover={{ backgroundColor: "rgb(229 231 235)" }}
        onClick={() => setExpanded(!expanded)}
      >
        <h2 className="text-gray-700 text-lg font-medium">Classic Resume</h2>
        {
          <motion.div
            animate={{ rotateZ: expanded ? 0 : 180 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <RiArrowUpSLine className="text-gray-700 h-5 w-5" />
          </motion.div>
        }
      </motion.div>

      {expanded && (
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
          transition={{ duration: 0.3, ease: [0.12, 0.45, 0.63, 1] }}
        >
          {/* accordion contents */}
          <div
            className="w-full bg-gray-200 select-none border 
           border-slate-100 border-t-0 rounded-bl-md rounded-br-md "
          >
            {expanded && (
              <div className="w-full">
                {mockData.map((mock, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-center items-start"
                  >
                    <button
                      className="px-4 py-3 w-full text-left text-gray-700 font-medium
                     hover:bg-gray-700 hover:text-white transition-colors  duration-200 ease-out"
                    >
                      {mock}
                    </button>
                    {mockData.length - 1 !== i && (
                      <hr className="h-1 bg-gray-300 border-b-2 w-10/12"></hr>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* end accordion contents */}
        </motion.section>
      )}
    </>
  );
};

export default TemplateAccordion;
