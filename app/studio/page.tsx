"use client";
import React, { useRef } from "react";
import ControlPanel from "@/components/ControlPanel";
import StudioHeader from "@/components/StudioHeader";
import TemplateClassic from "@/components/Templates/TemplateClassic";

const Page = () => {
  const targetRef = useRef(null);
  return (
    <div className="h-screen flex flex-col  bg-white">
      <StudioHeader targetRef={targetRef} />
      <div className="flex flex-1 overflow-hidden ">
        <div className="overflow-y-scroll w-[300px] 2xl:w-[500px] scrollbar-none">
          <ControlPanel />
        </div>
        <div className="flex justify-center flex-1 pt-4 bg-gray-500 rounded-tl-md scrollbar-none">
          <div className="overflow-y-auto w-full mx-auto py-4">
            <TemplateClassic pdfRef={targetRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
