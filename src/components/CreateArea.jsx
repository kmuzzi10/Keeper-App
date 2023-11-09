import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
//IMPORT ENDS

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <TextField
        id="standard-basic" label="Title" variant="standard"
          name="title"
          onChange={handleChange}
          value={note.title}
        />

        <TextField
        id="standard-basic" label="Take a note..." variant="standard"
          name="content"
          onChange={handleChange}
          value={note.content}
          rows="3"
        />
        <IconButton aria-label="add" onClick={submitNote}><AddIcon/></IconButton>
      </form>
    </div>
  );
}

export default CreateArea;
