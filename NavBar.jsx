import React, { useContext } from "react";
import LogoImg from '../assets/AchieversItLogo.png'
import { ModeContext } from "./CreateContext";


const NavBar = () => {

    const {mode,setmode} = useContext(ModeContext)

    const ThemeHandler =()=>{
        if(mode == "light"){
            setmode("dark")
        }else{
            setmode("light")
        }
    }
    return (
        <>
            <div className={mode}>
                <nav>
                    <div className="logo">
                        <img src={LogoImg} alt="logoImg" />
                    </div>
                    <div className="list">
                        <ul>
                            <li>Home</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <button onClick={ThemeHandler}>switch theme : {mode}</button>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default NavBar