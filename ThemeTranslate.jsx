import React, { useState } from "react";
import { ModeContext } from "./CreateContext";
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import FooterCont from "./FooterCont";
import './ThemeTranslate.css'


const ThemeTranslate = () => {

    const [mode, setmode] = useState("light");

    return (
        <>
            <ModeContext.Provider value={{ mode, setmode }}>
                <NavBar />
                <MainContent />
                <FooterCont />
            </ModeContext.Provider>

        </>
    )
}
export default ThemeTranslate
