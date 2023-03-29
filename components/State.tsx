"use client";
import useBearStore from "@/store/useBearStore";
import useFormStore from "@/store/useFormStore";
import React, { useState } from "react";

const State = () => {
  const {
    form: { name },
    setName,
  } = useFormStore((state) => state);
  return (
    <div>
      <div>
        <p>name:</p>
        <p>{name}</p>
      </div>
      <input
        type="text"
        onChange={({ currentTarget: { value } }) => setName(value)}
      />
    </div>
  );
};

export default State;
