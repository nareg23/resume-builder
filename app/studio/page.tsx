"use client";
import React, { useRef, useState } from "react";
import ControlPanel from "@/components/ControlPanel";
import StudioHeader from "@/components/StudioHeader";
import useTemplateStore from "@/store/useTemplateStore";

const Page = () => {
  const targetRef = useRef(null);
  const CurrentComponent = useTemplateStore((state) => state.currentComponent);

  return (
    <div className="h-screen flex flex-col bg-white">
      <StudioHeader targetRef={targetRef} />
      <div className="flex flex-1 overflow-hidden ">
        <div className="overflow-y-scroll w-[300px] 2xl:w-[500px] scrollbar-none">
          <ControlPanel />
        </div>
        <div className="flex justify-center flex-1 pt-4 bg-gray-200 rounded-tl-md scrollbar-none">
          <div className="overflow-y-auto w-full mx-auto py-4">
            {/* @ts-ignore */}
            <CurrentComponent targetRef={targetRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
