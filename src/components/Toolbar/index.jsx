import {
  faArrowPointer,
  faArrowsLeftRight,
  faPlay,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HexagonIcon, MoveIcon } from "../Icons";
import "./style.scss";

const Toolbar = ({ activeTool, onToolClick }) => {
  return (
    <div className="toolbar">
      <div className="linked-tools">
        <button
          className={activeTool === "selection" ? "active" : ""}
          onClick={() => onToolClick("selection")}
        >
          <FontAwesomeIcon icon={faArrowPointer} />
        </button>
        <button
          className={activeTool === "move" ? "active" : ""}
          onClick={() => onToolClick("move")}
        >
          <MoveIcon />
        </button>
        <button
          className={activeTool === "closest-point" ? "active" : ""}
          onClick={() => onToolClick("closest-point")}
        >
          <FontAwesomeIcon icon={faArrowsLeftRight} />
        </button>
      </div>
      <div className="shape-tools">
        <button
          className={activeTool === "add-triangle" ? "active" : ""}
          onClick={() => onToolClick("add-triangle")}
        >
          <FontAwesomeIcon icon={faPlay} rotation={270} />
        </button>
        <button
          className={activeTool === "add-square" ? "active" : ""}
          onClick={() => onToolClick("add-square")}
        >
          <FontAwesomeIcon icon={faSquare} />
        </button>
        <button
          className={activeTool === "add-hexagon" ? "active" : ""}
          onClick={() => onToolClick("add-hexagon")}
        >
          <HexagonIcon />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
