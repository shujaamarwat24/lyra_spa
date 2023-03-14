import { useState, useRef } from "react";

const Shape = ({ shape, onClick, index, selected, activeTool, closest }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: shape.x, y: shape.y });

  const shapeRef = useRef(null);

  const handleMouseDown = (event) => {
    if (activeTool === "move") {
      event.stopPropagation();
      setIsDragging(true);
    }
  };

  const handleMouseMove = (event) => {
    if (isDragging && activeTool === "move") {
      const offsetX = event.clientX - shapeRef.current.offsetWidth / 2;
      const offsetY = event.clientY - shapeRef.current.offsetHeight / 2;
      setPosition({ x: offsetX, y: offsetY });
    }
  };

  const handleMouseUp = () => {
    if (activeTool === "move") {
      setIsDragging(false);
      shape.x = position.x;
      shape.y = position.y;
    }
  };

  return (
    <div
      ref={shapeRef}
      className={`${shape.type} shape ${selected ? "selected" : ""} ${
        closest ? "closest" : ""
      }`}
      id={index}
      style={{ left: position.x, top: position.y }}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    ></div>
  );
};

export default Shape;
