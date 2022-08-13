import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation(["Home"]);
  console.log(t);
  return (
    <Box className="container">
      <Box sx={{ padding: "40px 0px" }}>
        <Typography variant="h6" className="text-center">
          {t("home")}
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
