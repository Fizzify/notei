import React, { useState } from "react";
import NoteIcon from "@mui/icons-material/Note";
import InfoIcon from "@mui/icons-material/Info";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import { Zoom, Tooltip } from "@mui/material";
import {
  usePopupState,
  bindTrigger,
  bindPopover,
} from "material-ui-popup-state/hooks";
import { Link } from "react-router-dom";

function Header() {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "infoPopover",
  });

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  setInterval(() => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }, 1000);

  return (
    <header>
      <h1>
        <Link to="/">
          <NoteIcon />
          Notei
        </Link>
      </h1>

      <h4 id="time">{time}</h4>

      <button {...bindTrigger(popupState)}>
        <Zoom in={true}>
          <Tooltip title="Info">
            <InfoIcon />
          </Tooltip>
        </Zoom>
      </button>
      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography style={{ padding: "14px" }}>
          Notei is a note-taking app for organization. It has a sticky note feel
          to it as you can drag around the notes wherever you want. This app was
          made by Fizzify.
        </Typography>
      </Popover>
    </header>
  );
}

export default Header;
