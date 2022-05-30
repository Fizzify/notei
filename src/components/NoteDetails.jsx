import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function NoteDetails() {
  const { uuid } = useParams();
  const data = localStorage.getItem("user-notes");
  const notes = JSON.parse(data);

  const noteFiltered = notes.filter((noteItem) => {
    return noteItem.id === uuid;
  });

  const [noteFound] = noteFiltered;

  return (
    <div id="note-details">
      <h1>{noteFound.title}</h1>
      <p>{noteFound.content}</p>
      <Link to="/">
        <Button variant="contained" id="back">Go Back</Button>
      </Link>
    </div>
  );
}

export default NoteDetails;
