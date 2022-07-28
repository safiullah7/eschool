import React from 'react';
import './App.css';
import Routes from './routes/Routes';
import { createTheme, green, NextUIProvider } from "@nextui-org/react"
import useDarkMode from 'use-dark-mode';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {},
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {},
  },
})


function App() {
  const darkMode = useDarkMode(false);


  return (
    <div className="App">
      <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <Routes />
      </NextUIProvider>
    </div>
  );
}

export default App;
