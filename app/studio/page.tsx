"use client";
import React, { useRef } from "react";
import ControlPanel from "@/components/ControlPanel";
import PdfTemplate from "@/components/PdfTemplate";
import Pdf from "react-to-pdf";
import StudioHeader from "@/components/StudioHeader";

const Page = () => {
  const targetRef = useRef(null);
  return (
    <div className="h-screen flex      flex-col bg-white">
      <StudioHeader targetRef={targetRef} />
      <div className="flex flex-1">
        <div className="w-[500px] ">
          <ControlPanel />
        </div>
        <div className="bg-orange-200 flex-1">
          <div ref={targetRef}>
            <PdfTemplate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
