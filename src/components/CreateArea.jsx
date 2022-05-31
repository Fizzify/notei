import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Fab from "@mui/material/Fab";
import { Tooltip, Zoom } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    color: "white",
    date: "",
    id: uuidv4(),
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExecuted, setIsExecuted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleClick(e) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      color: "white",
      date: "",
      id: uuidv4(),
    });
    e.preventDefault();
  }

  function takeANote() {
    setIsExpanded(true);
  }

  useEffect(() => {
    if (isExpanded) {
      if (!isExecuted) {
        document.querySelector("input[name='title']").focus();
        setIsExecuted(true);
      }
    }
  });

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            value={note.title}
            name="title"
            placeholder="Title"
            autoComplete="off"
          />
        )}
        <textarea
          onClick={takeANote}
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          autoComplete="off"
        />
        {isExpanded && (
          <input
            onChange={handleChange}
            value={note.date}
            type="date"
            name="date"
          />
        )}
        {isExpanded && (
          <input
            onChange={handleChange}
            value={note.color}
            type="color"
            name="color"
          />
        )}
        <div style={{ display: isExpanded ? "block" : "none" }}>
          <Zoom in={isExpanded ? true : false}>
            <Tooltip title="Add Note">
              <Fab onClick={handleClick}>
                <AddIcon />
              </Fab>
            </Tooltip>
          </Zoom>
          <Zoom in={isExpanded ? true : false}>
            <Tooltip title="Delete All Notes">
              <Fab onClick={props.onDeleteAll} id="delete-all">
                <DeleteForeverIcon />
              </Fab>
            </Tooltip>
          </Zoom>
        </div>
      </form>
    </div>
  );
}

export default CreateArea;
