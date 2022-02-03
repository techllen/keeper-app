import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

  const [noteArray, setNoteArray] = useState([]);

  function addNote(newNote) {
    setNoteArray(lastValue => 
      { return [...lastValue, newNote]; 
      });
    console.log(newNote);
  }

  function deleteItem(id) {
    setNoteArray(lastNotes => {
      return lastNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea 
      onAdd={addNote} 
      />

      {noteArray.map((todo, index) =>
      (
        <Note
          key={index}
          id={index}
          title={todo.title}
          content={todo.content}
          onDelete={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
