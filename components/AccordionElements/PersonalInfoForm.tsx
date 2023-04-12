import useFormStore from "@/store/useFormStore";
import React from "react";
import PersonalEditor from "../PersonalEditor";

const PersonalInfoForm = () => {
  const { setField, form } = useFormStore((state) => state);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      currentTarget: { value, name },
    } = e;
    setField(name, value);
  };
  return (
    <div className="text-gray-700/70 w-full flex flex-col items-center space-y-5 py-2">
      <div className="flex flex-col 2xl:flex-row w-full items-center space-x-0 2xl:space-x-2 space-y-4 2xl:space-y-0">
        <div className="overflow-hidden w-full flex-1 space-y-1">
          <p className="uppercase font-semibold text-xs">Name</p>
          <input
            value={form.name}
            className="text-gray-600 flex-1 w-full bg-gray-100 outline-none border 
             border-gray-300/50 font-medium rounded-sm px-2 py-2 text-md"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div className="flex-1 space-y-1 w-full">
          <p className="uppercase font-semibold text-xs">lastName</p>
          <input
            value={form.lastName}
            className="text-gray-600 flex-1 w-full bg-gray-100 outline-none border 
            border-gray-300/50 font-medium rounded-sm px-2 py-2 text-md"
            type="text"
            name="lastName"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="w-full space-y-1 ">
        <p className="uppercase font-semibold text-xs">email</p>
        <input
          value={form.email}
          className="text-gray-600 flex-1 w-full bg-gray-100 outline-none border
          border-gray-300/50 font-medium rounded-sm px-2 py-2 text-md"
          type="text"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="w-full space-y-1 ">
        <p className="uppercase font-semibold text-xs">title</p>
        <input
          value={form.title}
          className="text-gray-600 flex-1 w-full bg-gray-100 outline-none border
          border-gray-300/50 font-medium rounded-sm px-2 py-2 text-md"
          type="text"
          name="title"
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col justify-start w-full space-y-1">
        <p className="uppercase font-semibold text-xs">summary</p>
        <PersonalEditor />
      </div>

      <div className="flex flex-col 2xl:flex-row space-y-3 2xl:space-y-0 items-center w-full 2xl:space-x-2">
        <div className="space-y-1 w-full">
          <p className="uppercase font-semibold text-xs">city</p>
          <input
            value={form.city}
            className="text-gray-600 flex-1 w-full bg-gray-100 outline-none border
            border-gray-300/50 font-medium rounded-sm px-2 py-2 text-md "
            name="city"
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1 w-full">
          <p className="uppercase font-semibold text-xs">phone</p>
          <input
            value={form.phoneNum}
            className="text-gray-600 flex-1 w-full bg-gray-100 outline-none border
            border-gray-300/50 font-medium rounded-sm px-2 py-2 text-md"
            name="phoneNum"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
