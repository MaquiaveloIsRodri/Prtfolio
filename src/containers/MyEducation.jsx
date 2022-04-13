import React from "react";
import '../styles/MyEducation.scss';

const MyEducation = (props) => {
    return(
        <div className="Imagen-blackState">
            <section className={props.Arreglo1024 === true ? "arregloMy-education" : "my-education"} >
                <article className={props.Arreglo1024 === true ? "arregloEducacion" : "container"} id="educacion">
                    <div className="container-icon">
                        <span className="icon-education"></span>
                    </div>
                    <h2 className={props.Arreglo1024 === true ? "Arreglo-title-education" : "title-education"} >Mi educacion 🧠</h2>
                    <div className="container-education">
                        <span className="education-line"></span>
                        <p className={props.Arreglo1024 === true ? "Arreglo-education-info": "education-info"} >Ingeneria en software</p>
                        <p className={props.Arreglo1024 === true ? "Arreglo-education-suInfo": "education-suInfo"}>Universidad siglo 21</p>
                        <span className="education-line"></span>
                        <p className={props.Arreglo1024 === true ? "Arreglo-education-info": "education-info"} >Curso React Js</p>
                        <p className={props.Arreglo1024 === true ? "Arreglo-education-suInfo": "education-suInfo"}>Plataforma: Platzi</p>
                        <span className="education-line"></span>
                        <p className={props.Arreglo1024 === true ? "Arreglo-education-info": "education-info"} >Curso definitivo de Html y Css</p>
                        <p className={props.Arreglo1024 === true ? "Arreglo-education-suInfo" : "education-suInfo"}>Plataforma: Platzi</p>
                        <span className="education-line"></span>
                        <p className={props.Arreglo1024 === true ? "Arreglo-education-info": "education-info"} >Curso P.O.O JavaScript </p>
                        <p className={props.Arreglo1024 === true ? "Arreglo-education-suInfo" : "education-suInfo"}>Plataforma: Platzi</p>
                        <span className="education-line"></span>
                        <p className={props.Arreglo1024 === true ? "Arreglo-education-info": "education-info"} >Curso de JavaScript</p>
                        <p className={props.Arreglo1024 === true ? "Arreglo-education-suInfo" : "education-suInfo"}>Plataforma: Platzi</p>
                        <a className={props.Arreglo1024 === true ? "Arreglo-education-Button" : "education-Button"} href="https://platzi.com/p/rodrigofierrro/">Más...</a>
                    </div>  

                </article>
                <article className={props.Arreglo1024 === true ? "arregloTecnologias" : "container-Tecnologies"} id="Skills">
                    <h2 className="Title-tecnologies">Skills  😎</h2>
                    <div className="Img-tecnologies">
                        <span className="java"></span>
                        <span className="Html"></span>
                        <span className="Css"></span>
                        <span className="React"></span>
                        <span className="webpack"></span>
                        <span className="npm"></span>
                        <span className="Figma"></span>
                        <span className="gitHub"></span>
                    </div>
                </article>
            </section>
            
        </div>
    )
}
export default MyEducation;