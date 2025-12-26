import React, { useState } from "react";

const Dynamicbtn = () => {
    const [color, setColor ] = useState("red")
    const BtnHandler =()=>{
       if(color === "red"){
        setColor("blue")
       }
       if(color === "blue"){
        setColor("red")
       }
    }
    return (
        <>
            <div className="container text-center mt-3">
                <h1>Click The Button To See Magic</h1>
                <button className="btn border-black m-2" style={{backgroundColor: color}} onClick={BtnHandler}>Click Me</button>
            </div>

        </>

    )
}
export default Dynamicbtn