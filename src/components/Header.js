import React, { useEffect, useState } from "react";
import "../App.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [windowSize, setWindowSize] = useState();
  const [openMenu, setOpenMenu] = useState(Boolean(anchorEl));

  useEffect(() => {
    setWindowSize(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, []);

  const handleClose = () => {
    setOpenMenu(false);
  };

  const content = (
    <ul style={{ flexDirection: `${windowSize > 1200 ? "row" : "column"}` }}>
      <li>
        <a href="#presentation">A propos</a>
      </li>
      <li>
        <a href="#formations">Formations</a>
      </li>
      <li>
        <a href="#experiences">Expériences</a>
      </li>
      <li>
        <a className="contactButton" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );

  return (
    <div id="#formations" className="header">
      <a href="#">
        <p>Djibril SAMASSA</p>
      </a>
      {windowSize > 1200 ? (
        content
      ) : (
        <MenuIcon
          onClick={(e) => {
            setAnchorEl(e.currentTarget);
            setOpenMenu(true);
          }}
        />
      )}
      <Menu
        anchorEl={anchorEl}
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        open={openMenu}
        onClose={() => {
          handleClose();
        }}
      >
        {content}
      </Menu>
    </div>
  );
}
