import React from "react";

type Props = {
  personalForm: Form;
};

const Personal = ({ personalForm }: Props) => {
  return (
    <div>
      <h1>{personalForm.name}!</h1>
      <h2>{personalForm.lastName}</h2>
      <p>{personalForm.email}</p>
      <div dangerouslySetInnerHTML={{ __html: personalForm.summary }}></div>
      <p>{personalForm.city}</p>
      <p>{personalForm.phoneNum}</p>
    </div>
  );
};

export default Personal;
