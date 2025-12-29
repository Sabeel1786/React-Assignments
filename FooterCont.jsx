import React, { useContext } from "react";
import { ModeContext } from "./CreateContext";

const FooterCont = () => {
    const { mode } = useContext(ModeContext)
    return (
        <>
            <div className={mode}>
                <footer>
                    <p>Copyright &copy; 2025 AchieversIT. All Rights Reserved</p>
                </footer>
            </div>
        </>
    )
}
export default FooterCont