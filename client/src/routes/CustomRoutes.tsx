import React from 'react'
import { Routes, Route } from "react-router-dom";
import ForgetPassword from '../pages/Form/ForgetPassword';
import ResetPassword from '../pages/Form/ResetPassword';
import UserForm from '../pages/Form/UserForm';
import Home from '../pages/Home';

function CustomRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserForm />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>
    </>
  )
}

export default CustomRoutes
