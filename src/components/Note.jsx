import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { Tooltip, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

function Note({ onDelete, id, onInput, title, content, color }) {
  const [noteOpacity, setNoteOpacity] = useState("1");


  function handleClick() {
    document.querySelector(".delete").currentTime = 0;
    onDelete(id);
    document.querySelector(".delete").play();
  }

  function handleStart() {
    setNoteOpacity("0.4");
  }

  function handleStop() {
    setNoteOpacity("1");
  }

  return (
    <Draggable onStart={handleStart} onStop={handleStop}>
      <div
        className="note"
        style={{ opacity: noteOpacity, backgroundColor: color }}
      >
        <h1
          id="title"
          onInput={(e) => onInput(e)}
          contentEditable="true"
          suppressContentEditableWarning={true}
        >
          {title}
        </h1>
        <p
          id="content"
          onInput={(e) => onInput(e)}
          contentEditable="true"
          suppressContentEditableWarning={true}
        >
          {content}
        </p>
        <Link to={`/notes/${id}`}>
          <Button color="primary">Go to note</Button>
        </Link>
        <Tooltip title="Delete Note">
          <button id="delete" onClick={handleClick}>
            <DeleteIcon />
          </button>
        </Tooltip>
      </div>
    </Draggable>
  );
}

export default Note;
