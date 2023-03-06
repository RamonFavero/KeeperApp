import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from '../notes.js';
import Form from "./Form";

function createCard(props){
  return (<Note 
  title={props.title}
  content={props.content}
  />
)
}
function App() {
  return (
    <div>
      <Header />
    {notes.map(createCard)}
    <Form />
      <Footer />
    </div>
  );
}

export default App;
