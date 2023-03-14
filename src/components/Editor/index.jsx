import { useState } from "react";
import Shape from "../Shape";
import { closestPointInPolygon } from "../ClosestPoint/index.ts";
import "./style.scss";

const Editor = ({ activeTool }) => {
  const [shapes, setShapes] = useState([]);
  const [selectedShapeIndex, setSelectedShapeIndex] = useState(null);
  const [closestPoints, setClosestPoints] = useState([]);

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

  const handleMouseMove = (event) => {
    if (selectedShapeIndex !== null) {
      const updatedShapes = [...shapes];
      updatedShapes[selectedShapeIndex].x = event.nativeEvent.offsetX;
      updatedShapes[selectedShapeIndex].y = event.nativeEvent.offsetY;
      setShapes(updatedShapes);
    }

    if (activeTool === "closest-point") {
      const closestPoints = shapes.map((shape) => {
        let closest = null;

        if (shape.type === "square") {
          const vertices = [
            { x: shape.x, y: shape.y-10 },
            { x: shape.x + 50, y: shape.y-10 },
            { x: shape.x + 50, y: shape.y + 40 },
            { x: shape.x, y: shape.y + 40 },
          ];
          closest = closestPointInPolygon(vertices, event.nativeEvent.offsetX, event.nativeEvent.offsetY);
        }
        else if (shape.type === "triangle") {
          const vertices = [
            { x: shape.x + 5, y: shape.y + 45 },
            { x: shape.x + 30, y: shape.y },
            { x: shape.x + 55, y: shape.y + 50 },
          ];
          closest = closestPointInPolygon(vertices, event.nativeEvent.offsetX, event.nativeEvent.offsetY);
        } else if (shape.type === "hexagon") {
          const vertices = [
            { x: shape.x + 15 , y: shape.y - 15 },
            { x: shape.x + 40, y: shape.y - 15 },
            { x: shape.x + 60, y: shape.y + 12 },
            { x: shape.x + 44, y: shape.y + 35 },
            { x: shape.x+15, y: shape.y + 35 },
            { x: shape.x+5, y: shape.y + 10 },
          ];
          closest = closestPointInPolygon(vertices, event.nativeEvent.offsetX, event.nativeEvent.offsetY);
        }

        return closest;
      });

      setClosestPoints(closestPoints);
    }
  };

  const renderedShapes = shapes.map((shape, index) => (
    <Shape
      key={index}
      index={index}
      shape={shape}
      onClick={() => handleShapeClick(index)}
      selected={index === selectedShapeIndex}
      activeTool={activeTool}
    />
  ));

  const renderedDots = closestPoints.map((point, index) => (
    point && (
      <div
        key={index}
        className="closest-dot"
        style={{ left: point.x, top: point.y }}
      />
    )
  ));

  return (
    <div
      className="editor"
      onClick={handleCanvasClick}
      onMouseMove={handleMouseMove}
    >
      {renderedShapes}
      {renderedDots}
    </div>
  );
};

export default Editor;
