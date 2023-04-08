"use client";
import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

type Props = {
  personalForm: Form;
};

const Personal = ({ personalForm }: Props) => {
  return (
    <div className="flex flex-col select-none">
      <div className="flex flex-col justify-center items-center text-4xl font-medium pt-6 gap-1">
        <div className="flex gap-2">
          <h1 className="">{personalForm.name}</h1>
          <h2>{personalForm.lastName}</h2>
        </div>
        <p className="text-xl text-gray-500">{personalForm.title}</p>
      </div>

      <div className="grid grid-cols-3">
        <div className=" flex flex-col   items-start p-4">
          <div className="text-left w-full">
            <h3 className="mb-3 text-xl">Contact</h3>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MdEmail className="h-5 w-5 text-gray-500" />
              <p>{personalForm.email}</p>
            </div>

            <div className="flex items-center gap-2 font-semibold text-gray-900 ">
              <MdPhone className="h-5 w-5 text-gray-500" />
              <p>{personalForm.phoneNum}</p>
            </div>

            <div className="flex items-center gap-2">
              <MdEmail className="h-5 w-5 text-gray-500" />
              <p>{personalForm.email}</p>
            </div>
          </div>
        </div>

        <div className=" col-span-2 p-4">
          <h3 className="mb-3 text-xl">Summary</h3>
          <div
            className="text-gray-500"
            dangerouslySetInnerHTML={{ __html: personalForm.summary }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
