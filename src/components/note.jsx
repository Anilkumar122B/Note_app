import React from "react";

function Note(props){ 
    function deletenote(){ return props.onclick(props.id); }
   return  <div className="note">
        
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={deletenote}> delete</button>

    </div> ;
}
export default Note;