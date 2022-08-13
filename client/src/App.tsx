import React, { Suspense, useEffect, useState } from "react";
import "./styles/App.css";
import CustomRoutes from "./routes/CustomRoutes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTranslation } from "react-i18next";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Box } from "@mui/material";

function App() {
  const { t } = useTranslation(["Common"]);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark-mode") === "true"
  );
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  useEffect(() => {
    localStorage.setItem("dark-mode", String(darkMode));
  }, [darkMode]);

  const cacheRtl = createCache({
    key: t("isRTL") ? "muirtl" : "muiltr",
    stylisPlugins: t("isRTL") ? [rtlPlugin] : [],
  });

  return (
    <Box className="App" dir={t("positionElements")}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={darkTheme}>
          <Suspense fallback={<h1>Loading profile...</h1>}>
            <CssBaseline />
            <CustomRoutes darkMode={darkMode} setDarkMode={setDarkMode} />
          </Suspense>
        </ThemeProvider>
      </CacheProvider>
    </Box>
  );
}

export default App;
