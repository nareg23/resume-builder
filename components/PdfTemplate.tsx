"use client";

import useFormStore from "@/store/useFormStore";
import useWorkXpStore from "@/store/useWorkXpStore";
import React from "react";

const PdfTemplate = () => {
  const { name, lastName } = useFormStore((state) => state.form);
  const jobs = useWorkXpStore((state) => state.jobs);

  return (
    <div className="p-5">
      <h1>{name}</h1>
      <h1 className="text-4xl text-black">{lastName}</h1>
    </div>
  );
};

export default PdfTemplate;
