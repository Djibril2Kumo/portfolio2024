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
          <h3>
            <div className="contactButtonContainer">
              <button>
                <AlternateEmailIcon />
                <span>djibrilsamassa@outlook.com</span>
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
