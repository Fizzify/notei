import React, { useState, useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
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
    });
    e.preventDefault();
  }

  function takeANote() {
    setIsExpanded(true);
  }

  if (isExpanded) {
    if (!isExecuted) {
      setTimeout(() => {
        document.querySelector("input[name='title']").focus();
        setIsExecuted(true), 1000;
      });
    } else {
    }
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            onChange={handleChange}
            value={note.title}
            name="title"
            placeholder="Title"
            autoComplete="off"
          />
        ) : null}
        <textarea
          onClick={takeANote}
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : "1"}
          autoComplete="off"
        />
        <Zoom in={isExpanded ? true : false}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
