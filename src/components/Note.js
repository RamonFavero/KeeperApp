import React  from "react";
import TitleNote from "./TitleNote";


function Note(props) {
  return (
    <div className="note">
     <TitleNote {...props} />
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
