import React, { useState } from "react";
import formationsList from "../formations.json";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Presentation() {
  const [displayedFormation, setDisplayedFormation] = useState(0);

  const changeDisplayedFormation = (direction) => {
    if (direction === "left") {
      if (displayedFormation === 0) {
        setDisplayedFormation(formationsList.length - 1);
      } else {
        setDisplayedFormation(displayedFormation - 1);
      }
    } else {
      if (displayedFormation === formationsList.length - 1) {
        setDisplayedFormation(0);
      } else {
        setDisplayedFormation(displayedFormation + 1);
      }
    }
  };

  return (
    <div className="carousel greenBg">
      <ArrowBackIosIcon
        onClick={() => {
          changeDisplayedFormation("left");
        }}
        fontSize="large"
        className="arrow"
      />
      <div id="formations" className="component">
        <div className="content">
          <h2 className="componentTitle">Formations.</h2>
          <div className="formationsDisplay animateFromLeft">
            <p className="bigSizeText">
              {formationsList[displayedFormation].description}
            </p>

            <img
              className="etablissementImage"
              src={formationsList[displayedFormation].image}
              alt="formation"
            />
          </div>
        </div>
      </div>
      <ArrowForwardIosIcon
        onClick={() => {
          changeDisplayedFormation("right");
        }}
        fontSize="large"
        className="arrow"
      />
    </div>
  );
}
