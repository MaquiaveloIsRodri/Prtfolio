import React from "react";
import '../styles/contac.scss';

const Contac= () => {
    return(
        <section className="Contact" id="contactame">
            <article className="Contact-Me">
                <h2 className="title-contact">Contactame</h2>
                <div className="Contact-Me-Info">
                    <div className="Contact-Img Gmail1"><a className="Gmail" href="https://cloudhq.net/s/b99ca125e1a2e6" ></a></div>
                    <div className="Contact-Img WhatsApp2"><a href="https://walink.co/b47b99" className="WhatsApp" ></a></div>
                    <div className="Contact-Img Linkedin3"><a className="Linkedin" href="https://linkedin.com/in/rodrigo-fierro16"></a></div>
                </div>
            </article>
        </section>
    )
}

export default Contac;
