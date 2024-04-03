import React from "react";

export default function Modal() {
    return (
        <div id="apropos" className="modal">
            
            <div className="presentation">
                <span>
                <h1><span className="transparentText">Bonjour, je suis </span><br/>Djibril</h1>
                <h3>Développeur Fullstack React et Node JS fort d'une expertise technique solide
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