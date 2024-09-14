import React from "react";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import {
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  docker,
  redux,
  python,
  mongodb,
  webpack,
  linux,
} from "../tech";
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
    },
  ];

  return (
    <div id="presentation" className="component">
      <div className="content">
        <h2 className="componentTitle">Présentation.</h2>
        <p className="midSizeText greyText">
          Passionné par le développement, je m'engage à relever les défis
          techniques avec efficacité et créativité.
          <br />
          <br />
          En tant que développeur
          Fullstack, j'ai à cœur de concevoir des solutions qui allient
          performance et élégance. Chaque projet est pour moi une occasion de
          repousser mes limites techniques tout en offrant des résultats
          concrets.
          <br />
          Mon approche rigoureuse et ma polyvalence me permettent de
          m’adapter rapidement aux besoins variés de chaque mission, en
          apportant des solutions innovantes, optimisées et parfaitement
          adaptées aux attentes des utilisateurs et des entreprises.
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
          <h2 className="componentTitle">Quelques unes de mes compétences.</h2>
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
