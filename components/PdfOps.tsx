"use client";

import React, { useRef } from "react";
import Pdf from "react-to-pdf";

const PdfOps = () => {
  const targetRef = useRef(null);
  return (
    <div className="App">
      <Pdf targetRef={targetRef} filename="code-example.pdf">
        {({ toPdf }: any) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={targetRef} className="p-5">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
};

export default PdfOps;
