import React from "react";

export default function Modal() {
    return (
        <div id="apropos" className="modal">
            
            <div className="presentation">
                <span>
                <h1 className="boldTitle"><span className="transparentText">Bonjour, je suis </span><br/>Djibril</h1>
                <h3>Etudiant en mastère Lead développeur fullstack <br/>
                 A l'Ecole Européenne des métiers de l'internet.
                    </h3>
                </span>
            </div>
            <a href="/#presentation">
            <div className="down">
                <div className="circle"></div>
            </div>
            </a>
        </div>
    );
}