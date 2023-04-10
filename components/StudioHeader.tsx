"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import Pdf from "react-to-pdf";
import TemplateAccordion from "./AccordionElements/TemplateAccordion";
type Props = {
  targetRef: React.MutableRefObject<null>;
};

const DownloadBtn = ({ toPdf }: any) => (
  <button
    onClick={toPdf}
    className="text-white py-2 px-3 bg-emerald-600 rounded-md "
  >
    Download
  </button>
);

const StudioHeader = ({ targetRef }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex px-10 py-4 items-center justify-between">
        <div className="flex space-x-3 items-center">
          <Link href={"/"}>
            <AiFillHome className="h-8 w-8 text-gray-700" />
          </Link>
        </div>
        <div className="w-[30rem]">
          <TemplateAccordion isOpen={isOpen} setIsOpen={setIsOpen} />
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
