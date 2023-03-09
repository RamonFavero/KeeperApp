import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from '../notes.js';
import Form from "./Form";



function createCard(props){
  return (<Note 
  title={props.title}
  expirehour={props.expirehour}
  content={props.content}
  />
)}

let loop = notes.sort((a,b) => {
return a.expirehour<b.expirehour?1:-1;
})
console.log(loop);

function App() {





  return (
    <div>
      <Header />

    {loop.map(createCard)}

    <Form />
      <Footer />
      
    </div>
  );
}

export default App;
