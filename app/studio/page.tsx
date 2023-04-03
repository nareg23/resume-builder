"use client";
import React, { useRef } from "react";
import ControlPanel from "@/components/ControlPanel";
import PdfTemplate from "@/components/PdfTemplate";
import StudioHeader from "@/components/StudioHeader";

const Page = () => {
  const targetRef = useRef(null);
  return (
    <div className="h-screen flex flex-col bg-white">
      <StudioHeader targetRef={targetRef} />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[500px]">
          <ControlPanel />
        </div>
        <div className="flex-1 bg-gray-500 rounded-tl-md">
          <div ref={targetRef}>
            <PdfTemplate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
