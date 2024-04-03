import React from "react";
import experiences from "../experiences.json";
import WorkIcon from "@mui/icons-material/Work";

export default function Experiences() { 
  return (
    <div id="experiences" className="component">
      <div className="content">
        <h2 className="componentTitle">Expériences.</h2>
        <div className="cv">
          <span className="line"></span>
          {experiences.map((experience, index) => {
            return (
              <div key={index} className="experience">
                <div>
                  <p className="expTitle">{experience.title}</p>
                  <WorkIcon fontSize="large" className="workicon" />
                  <p className="infos">
                    {experience.annee} - {experience.etablissement}
                  </p>
                  <p>{experience.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
