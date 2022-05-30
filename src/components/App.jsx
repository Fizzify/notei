import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Welcome from "./Welcome";

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

  function handleInput(e) {
    const { id, textContent } = e.target;
  }
  return (
    <div>
      <Welcome />
      <Header />
      <CreateArea onAdd={addNote} onDeleteAll={deleteAllNotes} />
      <div className="notes">
        {!notes.length ? (
          <h1 id="first-note">
            To begin, use the create area above to create your first note.
          </h1>
        ) : (
          notes.map((noteItem) => (
            <Note
              key={noteItem.id}
              id={noteItem.id}
              onDelete={deleteNote}
              title={noteItem.title}
              content={noteItem.content}
              color={noteItem.color}
              onInput={handleInput}
            />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
