import React, { useState } from "react";

function Form(props) {
const [note,setNote] = useState({
  title: "",
  content: "",
  expirehour:""
})

function handleChange(e) {
  const { name, value } = e.target;
  
    setNote(prevNote => {
      return {...prevNote,
      [name]:value
      }})
}

function submitcard(e) {
  props.onAdd(note);
    setNote({title:"",content:"",expirehour:""});
 e.preventDefault()
}

  return (
    <div>
      <form>
       <input className="input"
        placeholder="Title"
         name="title"
          value={note.title}
            onChange={handleChange}
            />
       <textarea  className="input inputNote"
        placeholder="Take a note..."
         name="content"
          value={note.content}
           onChange={handleChange} 
           />
       <input className="input"
        type="time"
         value={note.expirehour}
          name="expirehour"
           onChange={handleChange} />
       <button onClick={submitcard}>Submit</button>
       </form>
       </div>
    
  );
}

export default Form;
