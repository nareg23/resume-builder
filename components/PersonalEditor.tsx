"use client";

import React from "react";
import useFormStore from "@/store/useFormStore";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//Quill Headbard controls

const modules = {
  toolbar: [["bold", "italic", "underline"]],
};

const formats = ["bold", "italic", "underline"];

const PersonalEditor = () => {
  const [setField, summary] = useFormStore((state) => [
    state.setField,
    state.form.summary,
  ]);

  return (
    <ReactQuill
      className="bg-gray-100 py-2 border-none text-sm border border-gray-300/50
       text-gray-700 font-semibold overflow-hidden rounded-md"
      theme="snow"
      value={summary}
      onChange={(value) => setField("summary", value)}
      formats={formats}
      modules={modules}
    />
  );
};

export default PersonalEditor;
