import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from '../notes.js';

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
      <Footer />
    </div>
  );
}

export default App;
