import React, { useState } from 'react';
import './App.css';
import CustomRoutes from './routes/CustomRoutes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DarkMode from './components/DarkMode/DarkMode';




function App() {
  const [darkMode, setDarkMode] = useState(false)
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
        <CssBaseline />
        <CustomRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
