import React from "react";
import Draggable from "react-draggable";
import { Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleClick() {
    document.getElementById("delete").currentTime = 0;
    props.onDelete(props.id);
    document.getElementById("delete").play();
  }
  return (
    <Draggable>
      <div className="note">
        <h1 contentEditable="true" suppressContentEditableWarning={true}>
          {props.title}
        </h1>
        <p contentEditable="true" suppressContentEditableWarning={true}>
          {props.content}
        </p>
        <Tooltip title="Delete Note">
          <button onClick={handleClick}>
            <DeleteIcon />
          </button>
        </Tooltip>
      </div>
    </Draggable>
  );
}

export default Note;
