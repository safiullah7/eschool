import { Box } from '@mui/material';
import React from 'react'
import { Routes, Route } from "react-router-dom";
import DarkMode from '../components/DarkMode/DarkMode';
import ForgetPassword from '../pages/Form/ForgetPassword';
import ResetPassword from '../pages/Form/ResetPassword';
import UserForm from '../pages/Form/UserForm';
import Home from '../pages/Home';

function CustomRoutes({darkMode, setDarkMode}:any) {
  return (
    <Box className="container">
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserForm />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>
    </Box>
  )
}

export default CustomRoutes
