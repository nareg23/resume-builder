import React from "react";
import { motion } from "framer-motion";
import { RiArrowUpSLine } from "react-icons/ri";

const mockData = ["Fantastic", "Awesome", "technical"];

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TemplateAccordion = ({ isOpen, setIsOpen }: Props) => {
  const expandedBorderClasses =
    "rounded-tl-md rounded-tr-md border border-slate-100 border-b-0";

  return (
    <div className="relative w-full">
      <motion.div
        className={` flex justify-between px-4 py-3 items-center
        cursor-pointer select-none border-slate-100  ${
          isOpen ? expandedBorderClasses : "rounded-md border"
        }`}
        initial={false}
        animate={{
          backgroundColor: isOpen ? "rgb(229 231 235)" : "rgb(243 244 246 )",
        }}
        whileHover={{ backgroundColor: "rgb(229 231 235)" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-gray-700 text-lg font-medium">Classic Resume</h2>
        {
          <motion.div
            animate={{ rotateZ: isOpen ? 0 : 180 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <RiArrowUpSLine className="text-gray-700 h-5 w-5" />
          </motion.div>
        }
      </motion.div>

      {isOpen && (
        <motion.section
          className="text-white relative w-full z-20"
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
          <div
            className="w-full absolute bg-gray-200 select-none border 
           border-slate-100 border-t-0 rounded-bl-md rounded-br-md "
          >
            {isOpen && (
              <div className="w-full ">
                {mockData.map((mock, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-center items-start "
                  >
                    <button
                      className="px-4 py-3 w-full text-left text-gray-700 font-medium overflow-hidden
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
    </div>
  );
};

export default TemplateAccordion;
