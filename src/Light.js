import React from "react";

const Light = (props) => {
  return (
    <div
      className="light"
      style={{ backgroundColor: props.color, opacity: props.active ? 1 : 0.45 }}
    ></div>
  );
};

export default Light;
