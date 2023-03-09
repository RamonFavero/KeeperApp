import React, { useEffect, useState } from "react";
import Note from "./Note";

var newValueTitle
var newValueContent
var newValueHour
var key = 1;
function createCard(props){
  return (<Note 
    ref={props.ref}
    key={props.key}
  title={props.title}
  expirehour={props.expirehour}
  
  content={props.content}
  />
)
}


// update hour of the day each 10s
function Form() {






const [form,setForm] = useState([])
const [items,setItems] = useState([]);
// register in an array all content of the form
function getTitle(e) {
  if (e.target.name==="title") {
   newValueTitle = e.target.value;
  }else if (e.target.name==="content") {
   newValueContent = e.target.value;
  }else if (e.target.name==="hour") {
    newValueHour = e.target.value
  }
    setForm({key:key,title:newValueTitle,content:newValueContent,expirehour:newValueHour})
}

// submit using HTML Button
function submitcard(e) {
  console.log(items);
  e.preventDefault()
  key++
    setItems(prevItems=>{
      return [...prevItems, form];
    });
setForm({title:"",content:"",expirehour:""});
 newValueTitle = ""
 newValueContent = ""
 newValueHour= ""
}
// submit using Enter Key
function submitcardFromEnterkey() {
  key++
    setItems(prevItems=>{
      return [...prevItems, form];
    });
setForm({title:"",content:"",expirehour:""});
 newValueTitle = ""
 newValueContent = ""
 newValueHour= ""
}

let loop = items.sort((a,b) => {
  return a.expirehour<b.expirehour?1:-1;
  })


  return (
    <div>
    {loop.map(createCard)}

    <div className="form">
    <p className="heading">New Note</p>
      <form onSubmit={submitcard}>
       <input className="input" placeholder="Title" name="title" value={form.title}  onChange={getTitle} ></input>
      
       <textarea onKeyDown={e=>{if (e.nativeEvent.key ==="Enter"&&!e.shiftKey){e.preventDefault();submitcardFromEnterkey(e.target.form)};}} className="input inputNote" placeholder="Note" name="content" value={form.content} onChange={getTitle}></textarea>
       <input className="input" type="time" value={form.expirehour} name="hour" onChange={getTitle}></input>
       <button className="btn"  type="submit">Submit</button>
       </form>
       </div>
    </div>
  );
}

export default Form;
