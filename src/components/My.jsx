import React from "react";
import '../styles/My.scss';
import usePdf from "../useHooks/usePdf";
const My = (props) => {
    return(
        <div className="my">
            <span className={props.ArregloImagen === true ? 'My-image imagen' : 'My-image'} ></span>
            <h1 className={props.Arreglo1024 === true ? "arregloTitle" : "My-title"} id="about">
                <span className="My-soy" >Soy</span> Rodrigo Fierro
            </h1>
            <p className={props.Arreglo1024 === true ? "arregloSubtitle" : "My-subTitle"}>
                Front-End Developer 👨‍💻
            </p>
            <button 
                className={props.Arreglo1024 === true ? "my-button" : "my-buttonMini"}
                onClick={usePdf}    
            >
                Descargar CV
            </button>
        </div>


    )
    

}

export default My;