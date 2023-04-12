import { useEffect, useState } from "react";
import { Box } from "../components/Box";

export const MouseSlider = () => {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div
      className="mouse_slider_container"
      style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
    >
      <Box RGB="R" setRGB={setR} />
      <Box RGB="G" setRGB={setG} />
      <Box RGB="B" setRGB={setB} />
    </div>
  );
};
