import React from 'react'
import { Routes, Route } from "react-router-dom";
import UserForm from '../pages/Form/UserForm';

function CustomRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserForm />} />
      </Routes>
    </>
  )
}

export default CustomRoutes
