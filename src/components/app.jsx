import React,{useState} from "react";
import Heading from "./heading";
import Add from "./add";
import Note from "./note";
import Footer from "./footer";
function App(){
    const [notes , setnotes] = useState([]);
    function add(newnote){
        setnotes((pre)=>{
            return [...pre , newnote];
        })
    }
    function remove(id){
        setnotes((pre) =>{
            return pre.filter((note,index)=>{
                return index !== id ;
            });
        });

    }
    return  <div>
        <Heading /> 
        <Add 
            onadd={add}
        />
        {notes.map((note , index)=>{
            return <Note 
            key ={index} 
            id= {index}
            title={note.title} 
            content={note.content}
            onclick={remove} />
        })}
        
        <Footer />
    </div>
    ;
}
export default App;