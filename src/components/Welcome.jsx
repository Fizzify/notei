import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import NoteIcon from "@mui/icons-material/Note";
import { DialogContentText } from "@mui/material";
import { useState } from "react";

const container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

function Welcome() {
  const [open, setOpen] = useState(true);

  function handleClose() {
    setOpen(false);
  }

  return (
    <div style={container}>
      <Dialog onClose={handleClose} open={open} style={container}>
        <NoteIcon style={{margin: "0 auto", marginTop: ".5em", fontSize: "2rem"}} />
        <DialogTitle>Welcome!</DialogTitle>
        <DialogContentText style={{padding: "1em"}}>
          To get started, click out of this box and add notes! You can also drag
          the notes wherever you want.
        </DialogContentText>
      </Dialog>
    </div>
  );
}

export default Welcome;
