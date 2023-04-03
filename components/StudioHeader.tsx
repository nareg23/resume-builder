"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { AiFillHome } from "react-icons/ai";
import Pdf from "react-to-pdf";
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
  return (
    <div>
      <div className="flex px-10 py-4 items-center justify-between">
        <Link href={"/"}>
          <AiFillHome className="h-8 w-8 text-gray-700" />
        </Link>
        <Pdf targetRef={targetRef} filename="resume.pdf">
          {({ toPdf }: any) => <DownloadBtn toPdf={toPdf} />}
        </Pdf>
      </div>
    </div>
  );
};

export default StudioHeader;
