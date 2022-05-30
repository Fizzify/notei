import React, { useState } from "react";
import Draggable from "react-draggable";
import { Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  const [noteOpacity, setNoteOpacity] = useState("1");
  function handleClick() {
    document.getElementById("delete").currentTime = 0;
    props.onDelete(props.id);
    document.getElementById("delete").play();
  }

  function handleStart() {
    setNoteOpacity("0.4");
  }

  function handleStop() {
    setNoteOpacity("1");
  }

  return (
    <Draggable onStart={handleStart} onStop={handleStop}>
      <div className="note" style={{ opacity: noteOpacity, backgroundColor: props.color }}>
        <h1
          id="title"
          onInput={(e) => props.onInput(e)}
          contentEditable="true"
          suppressContentEditableWarning={true}
        >
          {props.title}
        </h1>
        <p
          id="content"
          onInput={(e) => props.onInput(e)}
          contentEditable="true"
          suppressContentEditableWarning={true}
        >
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
