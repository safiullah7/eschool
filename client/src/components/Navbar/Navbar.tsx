import React from "react";
import { Link } from "react-router-dom";
import LanguageToggler from "../Localization/LanguageToggler";
import "../../styles/Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
import { Button } from "@mui/material";

interface Props {
  darkMode: any;
  setDarkMode: any;
}

function Navbar({ darkMode, setDarkMode }: Props) {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav">
          <div className="nav__logo">
            <Link to="/">QuizWebApp</Link>
          </div>
          <ul className="nav__list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/questions">Questions</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="nav__items">
            <Button variant="outlined" size="small">
              <Link to="create">Create Question</Link>
            </Button>
            <Button sx={{ margin: "0 10px" }} variant="contained" size="small">
              <Link to="login">Login</Link>
            </Button>
            <div className="nav__items--lan">
              <LanguageToggler />
            </div>
            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
