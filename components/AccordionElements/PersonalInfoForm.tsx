import useFormStore from "@/store/useFormStore";
import React from "react";

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
    <div>
      <div>
        <p>Name</p>
        <input
          value={form.name}
          className="text-black"
          type="text"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div>
        <p>lastName</p>
        <input
          value={form.lastName}
          className="text-black"
          type="text"
          name="lastName"
          onChange={handleChange}
        />
      </div>
      <div>
        <p>email</p>
        <input
          value={form.email}
          className="text-black"
          type="text"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <p>summary</p>
        <textarea
          value={form.summary}
          className="text-black"
          name="summary"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
