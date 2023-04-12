import { useEffect, useState, useRef } from "react";

interface Props {
  RGB: string;
  setRGB: (x: number) => void;
  rbgVal: number;
}

export const Box = ({ RGB, setRGB, rbgVal}: Props) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [localMousePosition, setLocalMousePosition] = useState({ x: 0, y: 0 });
  const [boxWidth, setBoxWidth] = useState(0);

  const handleMouseMove = (event) => {
    const localX = event.clientX - event.target.offsetLeft;
    const localY = event.clientY - event.target.offsetTop;

    setLocalMousePosition({ x: localX, y: localY });
    const elementWidth = boxRef.current?.clientWidth
    if (elementWidth) {
      setBoxWidth(Math.round(elementWidth))
      setRGB(Math.round(localMousePosition.x * (255/boxWidth)));
    }
  };

  useEffect(() => {
    const element = boxRef.current;
    if (!element) return;

    element.addEventListener("mousemove", handleMouseMove);
    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={boxRef} className="box_print" onMouseMove={handleMouseMove}>
      <div>{RGB}</div>
      <div>{rbgVal}</div>
    </div>
  );
};
