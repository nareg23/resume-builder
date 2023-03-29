"use client";
import React, { useRef } from "react";
import ControlPanel from "@/components/ControlPanel";
import PdfTemplate from "@/components/PdfTemplate";
import Pdf from "react-to-pdf";

const Page = () => {
  const targetRef = useRef(null);
  return (
    <div className="h-screen flex bg-gray-400">
      <div className="h-full w-1/4 overflow-y-scroll bg-cyan-950">
        <ControlPanel />
      </div>
      <div ref={targetRef}>
        <PdfTemplate />
      </div>
      <div className="absolute right-1 bottom-0">
        <Pdf targetRef={targetRef} filename="resume.pdf">
          {({ toPdf }: any) => <button onClick={toPdf}>Download</button>}
        </Pdf>
      </div>
    </div>
  );
};

export default Page;
