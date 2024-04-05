import React from "react";
import Modal from "./components/Modal";
import Formations from "./components/Formations";
import Presentation from "./components/Presentation";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";

export default function Main() {
  return (
    <div className="main">
      <Modal />
      <Presentation />
      <Formations />
      <Experiences />
      <Contact />
    </div>
  );
}
