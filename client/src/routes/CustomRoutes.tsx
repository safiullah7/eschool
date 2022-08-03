import { Box } from '@mui/material';
import React from 'react'
import { Routes, Route } from "react-router-dom";
import DarkMode from '../components/DarkMode/DarkMode';
import CreateQuestions from '../pages/Questions';
import ForgetPassword from '../pages/Form/ForgetPassword';
import ResetPassword from '../pages/Form/ResetPassword';
import UserLogin from '../pages/Form/UserLogin';
import Home from '../pages/Home';

function CustomRoutes({darkMode, setDarkMode}:any) {
  return (
    <Box className="container">
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<CreateQuestions />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>
    </Box>
  )
}

export default CustomRoutes
