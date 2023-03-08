import React, { useState } from "react";
import Note from "./Note";

var newValueTitle
var newValueContent
var id = 1;
function createCard(props){
  return (<Note 
  title={props.title}
  content={props.content}
  />
)
}

function Form() {

const [form,setForm] = useState([])
const [items,setItems] = useState([]);

function getTitle(e) {

  if (e.target.name==="title") {
   newValueTitle = e.target.value;
  }else if (e.target.name==="content") {
   newValueContent = e.target.value;
  }
    setForm({id:id,title:newValueTitle,content:newValueContent})
}


function submitcard(e) {
  id++
  
    setItems(prevItems=>{
      return [...prevItems, form];
    });
setForm({title:"",content:""});
 newValueTitle = ""
 newValueContent = ""
}


  return (
    <div>
    {items.map(createCard)}

    <div className="form">
    <p className="heading">New Note</p>
      <form onSubmit={submitcard}>
       <input className="input" placeholder="Title" name="title" value={form.title}  onChange={getTitle} ></input>
       <textarea onKeyDown={e=>
        {if (e.nativeEvent.key ==="Enter"&&!e.shiftKey){
          e.preventDefault();
           submitcard(e.target.form)
          };}} className="inputNote" placeholder="Note" name="content" value={form.content} onChange={getTitle}  ></textarea>
       <button className="btn"  type="submit">Submit</button>
       </form>
       </div>
    </div>
  );
}

export default Form;
//  if (e.nativeEvent.which ==13){e.preventDefault};