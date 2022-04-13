import React from "react";
import '../styles/IntroMain.scss';
const IntroMain = ({children}) =>{
    return(
        <div className="intro-main">
            {children}
        </div>

    );
}
export default IntroMain;