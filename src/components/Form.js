import React, { useState } from "react";


function Form() {
    let inputRef = React.createRef();
    const [form,setForm] = useState("Titulo")

function getTitle(e) {
    
    
}

function submitcard(e) {
    setForm(inputRef.current.value);

e.preventDefault();
}


  return (
    <div className="note">
        <h1>{form}</h1>
    
       <input ref={inputRef} ></input>
       
       <input onClick={submitcard} type="submit"  />
  
    </div>
  );
}

export default Form;
