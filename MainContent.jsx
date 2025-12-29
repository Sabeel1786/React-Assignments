import React, { useContext } from "react";
import { ModeContext } from "./CreateContext";

const MainContent = () =>{
    const {mode} = useContext(ModeContext)
    return(
        <>
        <div className={mode}>
            <main>
                <h1>Welcome to the Swicther App!</h1>
                <h4>This is content area and this theme is currently : {mode}</h4>
            </main>
        </div>

        </>
    )
}
export default MainContent