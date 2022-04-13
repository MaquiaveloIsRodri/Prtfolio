import React from "react";
import '../styles/Proyects.scss';
import { useInView } from 'react-intersection-observer';



const Proyects =(props)=>{
    const [ref, inView ]= useInView({threshold: 0.20});
    return(
        <section className="proyects" ref={ref} id="proyectos">
            {inView ?
                (
                    <div className="proyect-container sobre">
                        <article className="PracticaTodoT" >
                            <a
                                href="https://maquiaveloisrodri.github.io/PracticaTodo/" 
                                className={props.ArregloPracticas === true ? "PracticaTodoT-container1" : "PracticaTodoT-container"}
                                >
                                <span className="PracticaTodo-ImgT imagen"></span>
                                <div className="PracticaTodo__Text ocultar">
                                    <h2 className={props.ArregloPracticas === true ? "titulosText" : null }>Practica de Todos </h2>
                                    <p className="PracticaTodo__SubTitle">
                                        En esta practica tuvimos que crear una una practica con Todos , en donde podemos marcar
                                        independientemente las tareas que hemos completado.Lo que aqui pudimos aplicar fueron las Apis del DOM
                                        , como los React Hooks .
                                    </p>
                                </div>
                            </a>
                        </article>
                        <article className="PatataBitT trabajo ">
                            <a 
                                className="PatataBitT-container"
                                href="https://maquiaveloisrodri.github.io/Mobile-first/"
                            >
                                <span className="PatataBit-ImgT imagen"></span>
                                <div className="PatataBit__Text ocultar">
                                    <h2 className={props.ArregloPracticas === true ? "titulosText" : null}>Practica de PatataBit </h2>
                                    <p className="PatataBit__SubTitle">
                                        En esta practica de estructuracion de de componentes , en donde usamos display flex y display Grid.
                                        La divicion se realiza por una buena morfologia del sistema , produciones una sensacion de order y estructura
                                    </p>
                                </div>


                            </a>
                        </article>
                        <article className="MyBlogT trabajo">
                            <a 
                                className="MyBlogT-container"
                                href="https://maquiaveloisrodri.github.io/Practico-Blog/"    
                            >
                                <span className="MyBlog-ImgT imagen"></span>
                                <div className="MyBlog__Text ocultar">
                                    <h2 className={props.ArregloPracticas === true ? "titulosText" : null}>Practica de My Blog </h2>
                                    <p className="MyBlog__SubTitle">
                                        Esta es una practica de una pagina , estatica , pero ya no es solo una sola , sino que ya nos podemos deslizar
                                        atravez de botones , que nos dejan ir a la pagina de inicio , o las de MyBlog
                                    </p>
                                </div>
                            </a>
                        </article>
                        <a className="button-MoreT" href="https://github.com/MaquiaveloIsRodri?tab=overview&from=2022-03-01&to=2022-03-31">Más...</a>
                    </div>
                    
                )



            :
                (<div className="proyect-container">
                    <article className="PracticaTodo trabajo" >
                        <div className="PracticaTodo-container ">
                            <span className="PracticaTodo-Img imagen"></span>
                        </div>
                    </article>
                    <article className="PatataBit trabajo">
                        <div className="PatataBit-container">
                            <span className="PatataBit-Img imagen"></span>
                        </div>
                    </article>
                    <article className="MyBlog trabajo">
                        <div className="MyBlog-container">
                            <span className="MyBlog-Img imagen"></span>
                        </div>
                    </article>
                    <a className="button-More" >Más...</a>
                </div>
                )
            
            }
        </section>
        
            
    )
}

export default Proyects;
                

  
       