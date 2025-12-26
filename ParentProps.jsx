import React, { useState } from "react";
import ChildProps from "./ChildProps";

const ParentProps = () => {
    const [InputValue, setINputValue] = useState("")
    const [userprop, setProps] = useState("")

    const propsHandler = (event) => {
        setINputValue( event.target.value)
    }
    const clickHandler =()=>{
        setProps(InputValue.toLocaleLowerCase())
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <div className="propBox text-center">
                            <h1> Props </h1>

                            <input type="text" onChange={propsHandler} placeholder="success || warning || error"/>
                            <button className="btn btn-primary m-3" onClick={clickHandler}>Evaluate</button>

                            <ChildProps userprop={userprop}/>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </>
    )
}
export default ParentProps