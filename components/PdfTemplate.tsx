"use client";

import useFormStore from "@/store/useFormStore";
import React from "react";

const PdfTemplate = () => {
  const { name, lastName } = useFormStore((state) => state.form);
  return (
    <div>
      <h1>{name}</h1>
      <h1>{lastName}</h1>
    </div>
  );
};

export default PdfTemplate;
