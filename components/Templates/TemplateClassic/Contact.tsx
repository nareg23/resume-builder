"use client";
import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

type Props = {
  email: string;
  phone: string;
};

const Contact = ({ email, phone }: Props) => {
  return (
    <div className="w-full mb-16">
      <h5 className="uppercase text-lg text-gray-600 mb-2">Contact</h5>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2 text-gray-600">
          <MdEmail className="h-5 w-5" style={{ color: "rgb(75 85 99)" }} />
          <p className="text-sm">{email}</p>
        </div>
        <div className="flex items-center text-gray-600 space-x-2">
          <MdPhone className="h-5 w-5" style={{ color: "rgb(75 85 99)" }} />
          <p className="text-sm">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
