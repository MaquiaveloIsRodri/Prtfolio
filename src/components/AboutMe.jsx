import React from "react";
import '../styles/AboutMe.scss'

const AboutMe = (props) => {
    return (
        <div className="about-me" id="about">
            <span className="about-icon"></span>
            <h2 className={props.ArregloAbout === true ? 'fontTitle' : 'FontMobile'}>Sobre mi  ✌</h2>
            <div className={props.ArregloAbout === true ? 'about-me_paragraph font' : 'about-me_paragraph'}>
                <p className="text-1">Soy un entusiasta, amante de las tecnologías JavaScript.<br></br></p>
                <p className="text-2">Me encanta estudiar y seguir aprendiendo sobre diferentes tecnologías.<br></br></p>
                <p className="text-3">Mis metas hacia un futuro cercano, poder ser desarrollador Backend</p>
            </div>
        </div>
    )
}
export default AboutMe;
