import React from "react";
import "../App.css";

export default function Header() {
    
    return (
        <div id="#formations" className="header">
            <a href="#"><p>Djibril SAMASSA</p></a>
            <ul>
                <li><a href="#presentation">A propos</a></li>
                <li><a href="#formations">Formations</a></li>
                <li><a href="#experiences">Expériences</a></li>
                <li><a className="contact" href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}