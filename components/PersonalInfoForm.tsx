import useFormStore from "@/store/useFormStore";
import React from "react";

const PersonalInfoForm = () => {
  const [setLastName, setName] = useFormStore((state) => [
    state.setLastName,
    state.setName,
  ]);
  return (
    <div>
      <div>
        <p>Name</p>
        <input
          type="text"
          name="name"
          onChange={({ currentTarget }) => setName(currentTarget.value)}
        />
      </div>
      <div>
        <p>lastName</p>
        <input
          type="text"
          name="lastName"
          onChange={({ currentTarget }) => setLastName(currentTarget.value)}
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
