import React from "react";
import formationsList from "../formations.json";

export default function Presentation() {
  return (
    <div className="carousel greenBg">
      <div id="formations" className="component">
        <div className="content">
          <h2 className="componentTitle">Formations.</h2>
          {formationsList.map((formation, index) => (
            <div
              className={
                index % 2 === 0
                  ? "formationsDisplay animateFromLeft"
                  : "formationsDisplay animateFromRight"
              }
            >
              <p className="bigSizeText">{formation.description}</p>

              <img
                className="etablissementImage"
                src={formation.image}
                alt="formation"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
