import { useState } from "react";
import Shape from "../Shape";
import './style.scss';

const Editor = ({ activeTool }) => {
  const [shapes, setShapes] = useState([]);

  const handleCanvasClick = (event) => {
    if (activeTool === "add-square") {
      const newShape = { type: "square", x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY };
      setShapes([...shapes, newShape]);
    } else if (activeTool === "add-triangle") {
      const newShape = { type: "triangle", x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY };
      setShapes([...shapes, newShape]);
    } else if (activeTool === "add-hexagon") {
      const newShape = { type: "hexagon", x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY };
      setShapes([...shapes, newShape]);
    }
  };

  const handleShapeClick = (clickedShapeIndex) => {
    const clickedShape = shapes.splice(clickedShapeIndex, 1)[0];
    setShapes([...shapes, clickedShape]);
  };

  const renderedShapes = shapes.map((shape, index) => (

    <Shape key={index} index={index} shape={shape} onClick={() => handleShapeClick(index)} />
  ));

  return (
    <div className="editor" onClick={handleCanvasClick}>
      {renderedShapes}
    </div>
  );
};

export default Editor;
