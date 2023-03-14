import React from "react";

const Shape = ({ shape, onClick,index }) => {
  const renderShape = () => {
    switch (shape.type) {
      case "square":
        return <div className="square shape" id={index} style={{ left: shape.x, top: shape.y }} onClick={onClick}></div>;
      case "triangle":
        return <div className="triangle shape" id={index} style={{ left: shape.x, top: shape.y }} onClick={onClick}></div>;
      case "hexagon":
        return <div className="hexagon shape" id={index} style={{ left: shape.x, top: shape.y }} onClick={onClick}></div>;
      default:
        return null;
    }
  };

  return renderShape();
};

export default Shape;
