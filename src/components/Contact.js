import React from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export default function Contact() {
  return (
    <div id="contact" className="modal">
      <div className="contact">
        <span>
          <h1 className="boldTitle">contactez moi</h1>
          <p style={{width: '50%'}}>Si vous souhaitez en savoir plus sur mon parcours et mes projets,
             n'hésitez pas à me contacter. <br/> Je serais ravi d'échanger sur mes expériences,
            mes compétences, et d'explorer comment je peux contribuer à vos futurs projets.
             Apprenons à mieux nous connaître et voyons comment nous pourrions collaborer
              ensemble !</p>
          <h3>
            <div className="contactButtonContainer">
              <button>
                <AlternateEmailIcon />
                <span>dsamassa.pro@myyahoo.com</span>
              </button>
              <button>
                <LocalPhoneIcon />
                <span>06 37 03 56 41</span>
              </button>
              <a
                download="SAMASSA_Djibril_cv.pdf"
                href="SAMASSA_Djibril_cv.pdf"
              >
                <button className="cvButton">
                  <span>Télécharger mon CV</span>
                  <AttachFileIcon />
                </button>
              </a>
            </div>
          </h3>
        </span>
      </div>
    </div>
  );
}
