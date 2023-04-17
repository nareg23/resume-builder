"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import Pdf from "react-to-pdf";
import TemplateAccordion from "./AccordionElements/TemplateAccordion";

type Props = {
  targetRef: React.MutableRefObject<null>;
};

const DownloadBtn = ({ toPdf }: any) => (
  <button
    onClick={toPdf}
    className="text-white py-2 px-4
   bg-dark rounded-md hover:bg-dark/30 active:scale-[.9] transition-transform duration-150 "
  >
    Download
  </button>
);

const StudioHeader = ({ targetRef }: Props) => {
  return (
    <div>
      <div className="flex px-10 py-4 items-center justify-between">
        <div className="flex space-x-3 items-center">
          <Link href={"/"}>
            <AiFillHome className="h-8 w-8 text-dark" />
          </Link>
        </div>
        <div className="w-[30rem]">
          <TemplateAccordion />
        </div>
        <Pdf
          targetRef={targetRef}
          filename="resume.pdf"
          options={{
            orientation: "portrait",
            unit: "in",
            format: [8.3, 11.7],
          }}
        >
          {({ toPdf }: any) => <DownloadBtn toPdf={toPdf} />}
        </Pdf>
      </div>
    </div>
  );
};

export default StudioHeader;
