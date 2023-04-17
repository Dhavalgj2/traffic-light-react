import React from "react";

const Light = ({ color, active }) => {
  return (
    <div
      className="light"
      style={{ backgroundColor: color, opacity: active ? 1 : 0.45 }}
    ></div>
  );
};

export default Light;
