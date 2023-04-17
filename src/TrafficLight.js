import React, { useEffect, useState } from "react";
import Light from "./Light";

const lightDurations = [3000, 3000, 2000];

const TrafficLight = ({ intialValue }) => {
  const [colorIndex, setColorIndex] = useState(intialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setColorIndex((colorIndex + 1) % 3);
    }, lightDurations[colorIndex]);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className="traffic-light">
      <Light color="#f00" active={colorIndex === 0} />
      <Light color="#ff0" active={colorIndex === 2} />
      <Light color="#0c0" active={colorIndex === 1} />
    </div>
  );
};

export default TrafficLight;
