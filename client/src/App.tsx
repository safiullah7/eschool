import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import CustomRoutes from './routes/CustomRoutes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  const [darkMode, setDarkMode] =  useState(localStorage.getItem('dark-mode') === 'true')
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  useEffect(() => {
    localStorage.setItem('dark-mode', String(darkMode));
  }, [darkMode]);

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Suspense fallback={null}>
          <CssBaseline />
          <CustomRoutes darkMode={darkMode} setDarkMode={setDarkMode}/>
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
