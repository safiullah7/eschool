import React from "react";
import { Link } from "react-router-dom";
import LanguageToggler from "../Localization/LanguageToggler";
import "../../styles/Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
import { Box, Button } from "@mui/material";

interface Props {
  darkMode: any;
  setDarkMode: any;
}

function Navbar({ darkMode, setDarkMode }: Props) {
  return (
    <Box className="navbar">
      <Box className="container">
        <Box className="nav">
          <Box className="nav__logo">
            <Link to="/">QuizWebApp</Link>
          </Box>
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
          <Box className="nav__items">
            <Button variant="outlined" size="small">
              <Link to="create">Create Question</Link>
            </Button>
            <Button sx={{ margin: "0 10px" }} variant="contained" size="small">
              <Link to="login">Login</Link>
            </Button>
            <Box className="nav__items--lan">
              <LanguageToggler />
            </Box>
            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
