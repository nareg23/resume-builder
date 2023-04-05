"use client";

import React from "react";
import useWorkXpStore from "@/store/useWorkXpStore";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
      className="bg-gray-100 py-2 border-none text-sm
    text-gray-700 font-semibold overflow-hidden rounded-md"
      theme="snow"
      value={job?.description}
      onChange={(value) => setField("description", value, jobId)}
      formats={formats}
      modules={modules}
    />
  );
};

export default Editor;
