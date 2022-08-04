import React from "react";
import { Box, Paper } from "@mui/material";
import LanguageToggler from "../Localization/LanguageToggler";
import DarkMode from "../DarkMode/DarkMode";

interface Props {
  children: JSX.Element;
  darkMode: any;
  setDarkMode: any;
}

const paperStyle = {
  maxWidth: 500,
  width: "100%",
  margin: "0px auto 40px auto",
  borderRadius: "25px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
};

function Wrapper({ children, darkMode, setDarkMode }: Props) {
  return (
    <Box sx={{ padding: "" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "10px 0 50px 0",
        }}
      >
        <LanguageToggler />
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      </Box>
      <Paper elevation={2} style={paperStyle}>
        {children}
      </Paper>
    </Box>
  );
}

export default Wrapper;
