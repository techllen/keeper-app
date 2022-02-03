import React from "react";
import { useState } from "react";


function CreateArea(props) {

  const [note, setNote] = useState(
    {
      title: "",
      content: ""
    }
  );

  function handleInput(event) {
    //const newValue = event.target.value;
    const { name, value } = event.target;
    //setNote(newValue);

    setNote(lastNoteValue => {
      return {
        ...lastNoteValue,
        [name]: value
      } 
    });
    //console.log(newValue);
  }

  function submit(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={handleInput} name="title" placeholder="Title" value={note.title} required/>
        <textarea onChange={handleInput} name="content" placeholder="Take a note..." value={note.content} required rows="3" />
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
