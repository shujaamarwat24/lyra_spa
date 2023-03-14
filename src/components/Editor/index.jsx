import { useState } from "react";
import Shape from "../Shape";
import './style.scss';

const Editor = ({ activeTool }) => {
  const [shapes, setShapes] = useState([]);
  const [selectedShapeIndex, setSelectedShapeIndex] = useState(null);

  const handleCanvasClick = (event) => {
    if (activeTool === "add-square") {
      const newShape = {
        type: "square",
        x: event.nativeEvent.offsetX,
        y: event.nativeEvent.offsetY,
      };
      setShapes([...shapes, newShape]);
    } else if (activeTool === "add-triangle") {
      const newShape = {
        type: "triangle",
        x: event.nativeEvent.offsetX,
        y: event.nativeEvent.offsetY,
      };
      setShapes([...shapes, newShape]);
    } else if (activeTool === "add-hexagon") {
      const newShape = {
        type: "hexagon",
        x: event.nativeEvent.offsetX,
        y: event.nativeEvent.offsetY,
      };
      setShapes([...shapes, newShape]);
    }
  };

  const handleShapeClick = (clickedShapeIndex) => {
    if (activeTool === "move") {
      setSelectedShapeIndex(clickedShapeIndex);
    }
  };

  const handleShapeMove = (event) => {
    if (selectedShapeIndex !== null) {
      const updatedShapes = [...shapes];
      updatedShapes[selectedShapeIndex].x = event.nativeEvent.offsetX;
      updatedShapes[selectedShapeIndex].y = event.nativeEvent.offsetY;
      setShapes(updatedShapes);
    }
  };

  const renderedShapes = shapes.map((shape, index) => (
    <Shape
      key={index}
      index={index}
      shape={shape}
      onClick={() => handleShapeClick(index)}
      selected={index === selectedShapeIndex}
    />
  ));

  return (
    <div
      className="editor"
      onClick={handleCanvasClick}
      onMouseMove={handleShapeMove}
    >
      {renderedShapes}
    </div>
  );
};


export default Editor;
