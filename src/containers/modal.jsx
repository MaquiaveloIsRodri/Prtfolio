import React from "react";
import '../styles/Modal.scss'

const Modal =(props)=>{
    return (
        <div className="container-modal">
            <ul>
                <li>
                    <a 
                    href="#My" 
                    data-text="&nbsp;Menu&nbsp;" 
                    className="menu"
                    onClick={()=>props.setModal(false)}
                    >&nbsp;Menu&nbsp;</a>
                </li>
                <li>
                    <a 
                    href="#about" 
                    data-text="&nbsp;Sobre mi&nbsp;" 
                    className="SobreMi"
                    onClick={() => props.setModal(false)}
                    >&nbsp;Sobre mi&nbsp;</a>
                </li>
                <li>
                    <a 
                    href="#educacion" 
                    data-text="&nbsp;Educacion" 
                    className="Educacion" 
                    onClick={() => props.setModal(false)}
                    >&nbsp;Educacion&nbsp;</a>
                </li>
                <li>
                    <a 
                    href="#Skills" 
                    data-text="&nbsp;Skills&nbsp;" 
                    className="Skills" 
                    onClick={() => props.setModal(false)}>&nbsp;Skills&nbsp;</a>
                </li>
                <li>
                    <a
                        href="#proyectos"
                        data-text="&nbsp;Proyectos&nbsp;"
                        className="proyectos"
                        onClick={() => props.setModal(false)}>&nbsp;Proyectos&nbsp;</a>
                </li>
                <li>
                    <a 
                    href="#contactame" 
                    data-text="&nbsp;Contactame&nbsp;" 
                    className="contactame" 
                    onClick={() => props.setModal(false)}>&nbsp;Contactame&nbsp;</a>
                </li>

            </ul>
        </div>
        
    );
}

export default Modal;