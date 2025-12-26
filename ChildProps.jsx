import React,{useState} from "react";

const ChildProps =({userprop})=>{
    let style ={
        padding:"15px",
        borderRadius:"8px",
        color:"white",
        marginTop:"10px"
    };

    if(userprop === "success"){
        style.backgroundColor = "green"
    }
    else if(userprop === "warning"){
        style.backgroundColor = "orange"
    }
    else if(userprop === "error"){
        style.backgroundColor = "red"
    }
    else {
        style.backgroundColor ="gray"
    }
    return <div style={style}>Status :{userprop||"none"}</div>
}
export default ChildProps