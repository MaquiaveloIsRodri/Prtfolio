import React from "react";
import '../styles/Header.scss';

const Header = (props) => {
    const obtenModal = () => {
        if(props.modal===true){
            props.setModal(false);
        }else{
            props.setModal(true);
        }}
    const headerSi=()=>{
        if (props.arreglo1024===true){
           return(<nav className="Header-large" id="My">
                        <i className="header-Logo"></i>
                        <div className="header-Indices">
                            <ul className="indices-ul">
                                <li className="indices-menu">
                                    <a
                                        href="#My"
                                        data-text="&nbsp;Menu&nbsp;"
                                        className="menu2"
                                        onClick={() => props.setModal(false)}
                                    >&nbsp;Menu&nbsp;</a>
                                </li>
                                <li className="indices-menu">
                                    <a
                                        href="#about"
                                        data-text="&nbsp;Sobre mi&nbsp;"
                                        className="SobreMi2"
                                        onClick={() => props.setModal(false)}
                                    >&nbsp;Sobre mi&nbsp;</a>
                                </li>
                                <li className="indices-menu">
                                    <a
                                        href="#educacion"
                                        data-text="&nbsp;Educacion"
                                        className="Educacion2"
                                        onClick={() => props.setModal(false)}
                                    >&nbsp;Educacion&nbsp;</a>
                                </li>
                                <li className="indices-menu">
                                    <a
                                        href="#Skills"
                                        data-text="&nbsp;Skills&nbsp;"
                                        className="Skills2"
                                        onClick={() => props.setModal(false)}>&nbsp;Skills&nbsp;</a>
                                </li>
                                <li className="indices-menu">
                                    <a
                                        href="#proyectos"
                                        data-text="&nbsp;Proyectos&nbsp;"
                                        className="proyectos2"
                                        onClick={() => props.setModal(false)}>&nbsp;Proyectos&nbsp;</a>
                                </li>
                                <li className="indices-menu">
                                    <a
                                        href="#contactame"
                                        data-text="&nbsp;Contactame&nbsp;"
                                        className="contactame2"
                                        onClick={() => props.setModal(false)}>&nbsp;Contactame&nbsp;</a>
                                </li>
                            </ul>
                        </div>
                    </nav>)
        }else{
            return(<nav className="Header" id="My">
                        <i
                            className={props.modal === true ? "x" : "icon"}
                            onClick={obtenModal}
                        ></i>
                        <i className="Logo"></i>
                    </nav>)
        }


    }
    
    return(
        <div>
            {headerSi()}
        </div>
    );
}
export default Header;