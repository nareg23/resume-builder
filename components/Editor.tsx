"use client";

import useWorkXpStore from "@/store/useWorkXpStore";
import React, { useState } from "react";
import ReactQuill from "react-quill";

//Quill Headbard controls

const modules = {
  toolbar: [["bold", "italic", "underline"]],
};

const formats = ["bold", "italic", "underline"];

type Props = {
  jobId: number;
};

const Editor = ({ jobId }: Props) => {
  const [setField, job] = useWorkXpStore((state) => [
    state.setField,
    [...state.jobs].find((job) => job.id === jobId),
  ]);

  return (
    <ReactQuill
      className="bg-white z-10 p-2 pb-10 text-4xl text-blue-900 rounded-lg overflow-hidden"
      theme="bubble"
      value={job?.description}
      onChange={(value) => setField("description", value, jobId)}
      formats={formats}
      modules={modules}
    />
  );
};

export default Editor;
