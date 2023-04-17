import React, { useEffect, useState } from "react";
import Light from "./Light";

const TrafficLight = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const lightDuration = [3000, 1000, 3000];
  useEffect(() => {
    const timer = setTimeout(() => {
      setColorIndex((colorIndex + 1) % 3);
    }, lightDuration[colorIndex]);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className="traffic-lights">
      <Light color="red" active={colorIndex === 0} />
      <Light color="yellow" active={colorIndex === 2} />
      <Light color="green" active={colorIndex === 1} />
    </div>
  );
};

export default TrafficLight;
