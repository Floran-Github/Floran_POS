import React from "react";

const TextBox = ({ text, number, color }) => {
  return (
    <div
      className={`d-flex justify-content-between align-items-center w-100 h-100 p-4 mr-3 bg-${color}`}
    >
      <p className="mr-3 fs-4">{text}</p>
      <p className="fs-1">{number}</p>
    </div>
  );
};

export default TextBox;
