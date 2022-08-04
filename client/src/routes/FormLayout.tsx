import React from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../components/Form/Wrapper";

interface Props {
  darkMode: any;
  setDarkMode: any;
}

function FormLayout({ darkMode, setDarkMode }: Props) {
  return (
    <div className="container">
      <Wrapper darkMode={darkMode} setDarkMode={setDarkMode}>
        <Outlet />
      </Wrapper>
    </div>
  );
}

export default FormLayout;
