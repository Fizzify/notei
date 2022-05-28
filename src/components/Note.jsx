import React from "react";
import Draggable from "react-draggable";
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
        <h1 contentEditable="true">{props.title}</h1>
        <p contentEditable="true">{props.content}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    </Draggable>
  );
}

export default Note;
