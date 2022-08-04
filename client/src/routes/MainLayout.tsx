import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

interface Props {
  darkMode: any;
  setDarkMode: any;
}

function MainLayout({ darkMode, setDarkMode }: Props) {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet />
    </>
  );
}

export default MainLayout;
