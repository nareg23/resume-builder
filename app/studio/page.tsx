"use client";
import React, { useRef } from "react";
import ControlPanel from "@/components/ControlPanel";
import StudioHeader from "@/components/StudioHeader";
import TemplateClassic from "@/components/Templates/TemplateClassic";

const Page = () => {
  const targetRef = useRef(null);
  return (
    <div className="h-screen flex flex-col bg-white">
      <StudioHeader targetRef={targetRef} />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[500px]">
          <ControlPanel />
        </div>
        <div className="flex justify-center py-5 flex-1 bg-gray-500 rounded-tl-md">
          <div className="w-[595px] bg-white" ref={targetRef}>
            <TemplateClassic />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
