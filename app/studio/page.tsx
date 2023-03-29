"use client";
import React from "react";
import ControlPanel from "@/components/ControlPanel";
import PdfTemplate from "@/components/PdfTemplate";

const page = () => {
  return (
    <div className="h-screen flex bg-gray-400">
      <div className="h-full w-1/4 overflow-y-scroll bg-cyan-950">
        <ControlPanel />
      </div>
      <div>
        <PdfTemplate />
      </div>
    </div>
  );
};

export default page;
