import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Welcome from "./Welcome"

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("user-notes");
    if (data) {
      setNotes(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user-notes", JSON.stringify(notes));
  });

  function addNote(newNote) {
    document.getElementById("add").currentTime = 0;
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    document.getElementById("add").play();
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== id;
      });
    });
  }

  function deleteAllNotes() {
    document.getElementById("delete").currentTime = 0;
    setNotes([]);
    document.getElementById("delete").play();
  }
  return (
    <div>
      <Welcome />
      <Header />
      <CreateArea onAdd={addNote} onDeleteAll={deleteAllNotes} />
      <div className="notes">
        {notes.map((noteItem) => {
          return (
            <Note
              key={noteItem.id}
              id={noteItem.id}
              onDelete={deleteNote}
              title={noteItem.title}
              content={noteItem.content}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
