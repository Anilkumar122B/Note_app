import React,{useState} from "react";
function Add(props){
    const [newnote , setnewnote] = useState({
        title : "",
        content : ""
    });
    function entered(event){
        const{name,value} =event.target;
        setnewnote((pre)=>{
            return {
                ...pre , 
                [name] : value 
            }       
        })
    }
    function submitted(event){
        props.onadd(newnote);
        setnewnote({
            title : "",
            content : ""
        })
        event.preventDefault();
    }
    return <div>
        <form  className="form">
            <input onChange={entered} placeholder="Enter note title" name ="title" value={newnote.title}></input>
            <textarea onChange={entered} placeholder="Enter note Content" name="content" value={newnote.content} rows="3"></textarea>
            <button onClick={submitted} type="submit"> ADD </button>
        </form>
    </div>;
}
export default Add;