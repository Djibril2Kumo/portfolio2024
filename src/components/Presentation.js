import React from "react";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import { javascript, html, css, reactjs, nodejs, git, docker, redux, python, mongodb, webpack, linux } from "../tech";
import Ball from "./Ball";

export default function Presentation() {
  const list = [
    {
      name: "Sens de l'écoute et de l'analyse",
      icon: <PsychologyIcon fontSize="large" />,
    },
    {
      name: "Accéssibilité & bonnes pratiques",
      icon: <AccessibilityIcon fontSize="large" />,
    },
    {
      name: "Fort de propositions et d'idées innovantes",
      icon: <EmojiObjectsIcon fontSize="large" />,
    },
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Redux",
      icon: redux,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Webpack",
      icon: webpack,
    },
    {
      name: "Linux",
      icon: linux,
    }
  ];

  return (
    <div id="presentation" className="component">
      <div className="content">
        <h2 className="componentTitle">Présentation.</h2>
        <p className="midSizeText greyText">
          Ma passion pour le développement et ma capacité à résoudre
          efficacement les défis techniques font de moi un atout pour tout
          projet de développement web.
          <br />
          Développeur Fullstack ayant une plus grande appètence pour le front,
          je m'efforce de créer des expériences et interfaces utilisateur
          agréables.
        </p>

        <div className="cardContainer">
          {list.map((item, index) => (
            <div className="card" key={index}>
              {item.icon}
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        <div className="competences">
          <h2 className="componentTitle">Mes compétences.</h2>
          <div className="ballsContainer">
            {technologies.map((technology, index) => (
              <Ball key={index} techno={technology} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
